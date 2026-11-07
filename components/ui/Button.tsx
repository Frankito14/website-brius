import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "whatsapp";
  size?: "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold rounded-lg transition-all duration-200 cursor-pointer select-none group text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 disabled:opacity-50 disabled:pointer-events-none active:translate-y-0";

  const sizeStyles = {
    md: "h-12 px-6 text-base gap-2 hover:-translate-y-0.5",
    lg: "h-12 px-6 text-md gap-3 hover:-translate-y-0.5",
  };

  const variantStyles = {
    primary:
      "bg-accent-600 text-white hover:bg-accent-700 shadow-glow",
    secondary:
      "bg-white text-ink-950 border border-ink-200 hover:border-accent-400 hover:bg-accent-50 shadow-soft",
    ghost:
      "text-accent-700 hover:bg-accent-50 hover:text-accent-800",
    inverse:
      "bg-white text-ink-950 hover:bg-accent-50 shadow-soft",
    whatsapp:
      "bg-[#128C4A] text-white hover:bg-[#0F7A40] shadow-soft",
  };

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
