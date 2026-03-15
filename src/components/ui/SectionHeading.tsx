import { type ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({ title, subtitle, className = "", children }: SectionHeadingProps) {
  return (
    <div className={`mb-10 text-center md:mb-14 ${className}`}>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-dark/80">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
