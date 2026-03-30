"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS, LOGO_PATH, SITE_NAME } from "@/lib/constants";
import { SocialIcon, type SocialIconKey } from "@/components/ui/SocialIcons";

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

const linkClass =
  "text-sm font-medium text-brand-dark/90 transition-colors hover:text-brand-accent";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [referansOpen, setReferansOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white transition-[box-shadow] duration-300 ${
        scrolled
          ? "border-brand-dark/[0.08] shadow-[0_4px_24px_-4px_rgba(15,27,45,0.12)]"
          : "border-brand-dark/[0.06] shadow-[0_1px_0_rgba(15,27,45,0.04)]"
      }`}
    >
      <div className="mx-auto flex h-[4rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label={SITE_NAME}>
          <div className="relative h-9 w-[132px] sm:h-10 sm:w-[152px]">
            <Image
              src={LOGO_PATH}
              alt={SITE_NAME}
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 132px, 152px"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex lg:gap-8" aria-label="Ana menü">
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
                    className={`flex items-center gap-1 ${linkClass}`}
                    aria-expanded={referansOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {referansOpen && (
                    <div className="absolute left-0 top-full z-20 pt-1.5">
                      <div className="min-w-[240px] rounded-xl border border-brand-dark/10 bg-white py-1.5 shadow-lg shadow-brand-dark/10 ring-1 ring-brand-dark/[0.04]">
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
              <Link key={href} href={href} className={linkClass}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex lg:gap-3.5">
          {socialIcons.map(({ href, label, key }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1 text-brand-dark/55 transition-colors hover:bg-brand-bg hover:text-brand-accent"
              aria-label={label}
            >
              <SocialIcon type={key as SocialIconKey} />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-dark md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
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

      {mobileOpen && (
        <div className="border-t border-brand-dark/10 bg-white md:hidden">
          <nav className="flex flex-col gap-0.5 px-4 py-4" aria-label="Mobil menü">
            {NAV_LINKS.map((item) => {
              if (hasSubLinks(item)) {
                return (
                  <div key={item.label} className="flex flex-col gap-0">
                    <span className="rounded-lg px-4 py-2 text-sm font-semibold text-brand-dark/75">
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
            <div className="mt-4 flex gap-3 border-t border-brand-dark/10 pt-4">
              {socialIcons.map(({ href, label, key }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-dark/60 transition-colors hover:text-brand-accent"
                  aria-label={label}
                >
                  <SocialIcon type={key as SocialIconKey} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
