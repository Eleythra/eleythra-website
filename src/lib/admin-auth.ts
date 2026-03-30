import type { NextRequest } from "next/server";

/** httpOnly çerez; tarayıcı sonraki isteklerde otomatik gönderir */
export const ADMIN_SESSION_COOKIE = "eleythra_admin_session";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 90; // 90 gün

export function adminSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: COOKIE_MAX_AGE,
  };
}

export function getAdminTokenFromRequest(request: NextRequest): string | null {
  const header = request.headers.get("x-admin-token");
  if (header) return header;
  return request.cookies.get(ADMIN_SESSION_COOKIE)?.value ?? null;
}

export function verifyAdminToken(request: NextRequest): boolean {
  const expected = process.env.ADMIN_DEMO_TOKEN;
  const got = getAdminTokenFromRequest(request);
  return !!(expected && got === expected);
}
