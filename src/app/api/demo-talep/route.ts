import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export interface DemoTalepBody {
  name: string;
  company: string;
  email: string;
  phone: string;
  purpose: string;
  project: string;
}

export async function POST(request: NextRequest) {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { error: "Sunucu yapılandırması eksik." },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as DemoTalepBody;
    const { name, company, email, phone, purpose, project } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Ad soyad ve e-posta zorunludur." },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.from("talepler").insert({
      type: "demo",
      name: (name || "").trim(),
      company: (company || "").trim() || null,
      email: (email || "").trim(),
      phone: (phone || "").trim() || null,
      purpose: (purpose || "").trim() || null,
      project: (project || "").trim() || null,
      subject: null,
      message: null,
    }).select("id").single();

    if (error) {
      console.error("Demo talep Supabase hatası:", error);
      return NextResponse.json(
        { error: "Talebiniz kaydedilirken bir hata oluştu." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Demo talep kayıt hatası:", err);
    return NextResponse.json(
      { error: "Talebiniz kaydedilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
