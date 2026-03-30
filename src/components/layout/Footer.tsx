import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS, LOGO_PATH, SITE_NAME } from "@/lib/constants";
import { SocialIcon, type SocialIconKey } from "@/components/ui/SocialIcons";

const socialIcons = [
  { key: "linkedin", href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { key: "instagram", href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { key: "x", href: SOCIAL_LINKS.x, label: "X" },
  { key: "youtube", href: SOCIAL_LINKS.youtube, label: "YouTube" },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-dark-section text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0" aria-label={SITE_NAME}>
            <div className="relative h-10 w-[140px] sm:h-11 sm:w-[160px]">
              <Image
                src={LOGO_PATH}
                alt={SITE_NAME}
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="(max-width: 640px) 140px, 160px"
              />
            </div>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 md:justify-start" aria-label="Footer menü">
            {NAV_LINKS.flatMap((item) => {
              if ("subLinks" in item && Array.isArray(item.subLinks)) {
                return item.subLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {sub.label}
                  </Link>
                ));
              }
              const { href, label } = item as { href: string; label: string };
              return (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialIcons.map(({ href, label, key }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label={label}
              >
                <SocialIcon type={key as SocialIconKey} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} {SITE_NAME}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
