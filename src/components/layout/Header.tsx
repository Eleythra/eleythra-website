"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS, LOGO_PATH, SITE_NAME } from "@/lib/constants";

type NavItem = (typeof NAV_LINKS)[number];
function hasSubLinks(item: NavItem): item is Extract<NavItem, { subLinks: unknown }> {
  return "subLinks" in item && Array.isArray((item as { subLinks?: unknown }).subLinks);
}

const socialIcons = [
  { key: "linkedin", href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { key: "instagram", href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { key: "x", href: SOCIAL_LINKS.x, label: "X" },
  { key: "youtube", href: SOCIAL_LINKS.youtube, label: "YouTube" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [referansOpen, setReferansOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label={SITE_NAME}>
          <div className="relative h-10 w-[140px] sm:h-11 sm:w-[160px]">
            <Image
              src={LOGO_PATH}
              alt={SITE_NAME}
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 140px, 160px"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Ana menü">
          {NAV_LINKS.map((item) => {
            if (hasSubLinks(item)) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setReferansOpen(true)}
                  onMouseLeave={() => setReferansOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-sm font-medium text-brand-dark transition-colors hover:text-brand-accent"
                    aria-expanded={referansOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="h-4 w-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {referansOpen && (
                    <div className="absolute left-0 top-full pt-1">
                      <div className="min-w-[240px] rounded-lg border border-brand-dark/10 bg-white py-1 shadow-lg">
                        {item.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-bg hover:text-brand-accent"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            const { href, label } = item as { href: string; label: string };
            return (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-brand-dark transition-colors hover:text-brand-accent"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Social icons - desktop */}
        <div className="hidden items-center gap-4 md:flex">
          {socialIcons.map(({ href, label, key }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark/70 transition-colors hover:text-brand-accent"
              aria-label={label}
            >
              <SocialIcon type={key as keyof typeof SOCIAL_LINKS} />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-dark md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Menüyü aç"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-dark/10 bg-white/98 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobil menü">
            {NAV_LINKS.map((item) => {
              if (hasSubLinks(item)) {
                return (
                  <div key={item.label} className="flex flex-col gap-0">
                    <span className="rounded-lg px-4 py-2 text-sm font-semibold text-brand-dark/80">
                      {item.label}
                    </span>
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg py-2.5 pl-8 pr-4 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-bg hover:text-brand-accent"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              const { href, label } = item as { href: string; label: string };
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-bg hover:text-brand-accent"
                >
                  {label}
                </Link>
              );
            })}
            <div className="mt-4 flex gap-4 border-t border-brand-dark/10 pt-4">
              {socialIcons.map(({ href, label, key }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark/70 transition-colors hover:text-brand-accent"
                  aria-label={label}
                >
                  <SocialIcon type={key as keyof typeof SOCIAL_LINKS} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function SocialIcon({ type }: { type: keyof typeof SOCIAL_LINKS }) {
  const size = 20;
  switch (type) {
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "x":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
}
