import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Vercel / proxy arkasında doğru host (Host veya X-Forwarded-Host). */
function requestHostname(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-host");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim() ?? "";
    if (first) return first.split(":")[0]?.toLowerCase() ?? "";
  }
  const raw = request.headers.get("host") ?? "";
  return raw.split(":")[0]?.toLowerCase() ?? "";
}

/**
 * ADMIN_HOST (örn. admin.eleythra.com) ayarlıysa:
 * - Yönetim paneli yalnızca bu host üzerinden kök URL ile kullanılır (/?token=...).
 * - Ana sitedeki /admin/* istekleri alt alan adına yönlendirilir.
 */
export function middleware(request: NextRequest) {
  const adminHost = process.env.ADMIN_HOST?.trim().toLowerCase();
  if (!adminHost) {
    return NextResponse.next();
  }

  const host = requestHostname(request);
  const pathname = request.nextUrl.pathname;

  if (host === adminHost) {
    if (pathname === "/" || pathname === "") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/demo-talepleri";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const url = request.nextUrl.clone();
    url.hostname = adminHost;
    url.port = "";
    url.protocol = "https";
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/admin", "/admin/:path*"],
};
