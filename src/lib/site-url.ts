/** Canonical site origin (no trailing slash). Fallback for local build without env. */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://eleythra.com";
  return raw.replace(/\/$/, "");
}
