import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export interface IletisimBody {
  name: string;
  email: string;
  subject: string;
  message: string;
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
    const body = (await request.json()) as IletisimBody;
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Ad soyad, e-posta ve mesaj zorunludur." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("talepler").insert({
      type: "contact",
      name: (name || "").trim(),
      email: (email || "").trim(),
      subject: (subject || "").trim() || null,
      message: (message || "").trim(),
      company: null,
      phone: null,
      purpose: null,
      project: null,
    });

    if (error) {
      console.error("İletişim Supabase hatası:", error);
      return NextResponse.json(
        { error: "Mesajınız kaydedilirken bir hata oluştu." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("İletişim kayıt hatası:", err);
    return NextResponse.json(
      { error: "Mesajınız kaydedilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}
