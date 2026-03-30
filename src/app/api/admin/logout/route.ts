import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "@/lib/admin-auth";

const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eleythra.com";

/** Çıkış: çerezi siler, ana siteye yönlendirir */
export async function GET() {
  const res = NextResponse.redirect(publicSiteUrl);
  res.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  });
  return res;
}
