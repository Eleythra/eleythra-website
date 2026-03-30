import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminSessionCookieOptions,
} from "@/lib/admin-auth";

/**
 * Tek seferlik giriş: GET /api/admin/session?token=ADMIN_DEMO_TOKEN
 * Çerez yazar ve panele yönlendirir. Sonra https://admin.../ adresi token olmadan açılabilir.
 */
export async function GET(request: NextRequest) {
  const adminToken = process.env.ADMIN_DEMO_TOKEN;
  const token = request.nextUrl.searchParams.get("token");

  if (!adminToken) {
    return new NextResponse("ADMIN_DEMO_TOKEN tanımlı değil.", { status: 503 });
  }

  if (token !== adminToken) {
    return new NextResponse("Geçersiz veya eksik token.", { status: 401 });
  }

  const dest = new URL("/admin/demo-talepleri", request.url);
  const res = NextResponse.redirect(dest);
  res.cookies.set(ADMIN_SESSION_COOKIE, token, adminSessionCookieOptions());
  return res;
}
