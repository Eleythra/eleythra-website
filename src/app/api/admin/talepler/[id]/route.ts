import { NextRequest, NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase";

function unauthorized() {
  return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!verifyAdminToken(request)) return unauthorized();

  const { id } = await context.params;
  let body: { read?: boolean };
  try {
    body = (await request.json()) as { read?: boolean };
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  if (typeof body.read !== "boolean") {
    return NextResponse.json(
      { error: "JSON içinde read (boolean) gerekli." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Sunucu yapılandırması eksik." },
      { status: 503 }
    );
  }

  const read_at = body.read ? new Date().toISOString() : null;
  const { data, error } = await supabase
    .from("talepler")
    .update({ read_at })
    .eq("id", id)
    .select("id, read_at")
    .maybeSingle();

  if (error) {
    console.error("Talep güncelleme:", error);
    const msg = String(error.message ?? "");
    if (msg.includes("read_at") || msg.includes("column")) {
      return NextResponse.json(
        {
          error:
            "Veritabanında read_at sütunu eksik. Supabase SQL Editor’da: alter table talepler add column if not exists read_at timestamptz;",
        },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Güncellenemedi." }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json(
      { error: "Kayıt bulunamadı veya güncellenemedi." },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, read_at: data.read_at });
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  if (!verifyAdminToken(request)) return unauthorized();

  const { id } = await context.params;
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Sunucu yapılandırması eksik." },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("talepler")
    .delete()
    .eq("id", id)
    .select("id")
    .maybeSingle();

  if (error) {
    console.error("Talep silme:", error);
    return NextResponse.json({ error: "Silinemedi." }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "Kayıt bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
