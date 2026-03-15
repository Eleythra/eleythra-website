export const SITE_NAME = "Eleythra Derin Teknoloji";

export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/biz-kimiz", label: "Biz Kimiz" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  {
    label: "Referanslarımız",
    subLinks: [
      { href: "/referans-otellerimiz", label: "Referans Otellerimiz" },
      { href: "/is-birligi-destekleyen-kurumlar", label: "İş Birliği ve Destekleyen Kurumlar" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/eleythra/?viewAsMember=true",
  instagram: "https://www.instagram.com/eleythra",
  x: "https://x.com/eleythra",
  youtube: "https://www.youtube.com/@Eleythra",
} as const;

export const CONTACT_EMAIL = "info@eleythra.com";
export const CONTACT_WEBSITE = "https://eleythra.com";
export const CONTACT_ADDRESS =
  "Sanayi Mah. Teknopark Blv. No:1/4C Pendik / İstanbul";

export const LOGO_PATH = "/logo.png";
