import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

const variants = {
  primary:
    "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-lg hover:shadow-xl",
  secondary:
    "bg-brand-highlight text-white hover:opacity-90",
  outline:
    "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
};

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2";

  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combined} onClick={onClick}>
      {children}
    </button>
  );
}
