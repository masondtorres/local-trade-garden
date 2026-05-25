import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-garden text-white hover:bg-deep shadow-card border border-garden",
    secondary:
      "bg-card text-deep hover:bg-white border border-borderwarm shadow-card",
    light:
      "bg-white text-deep hover:bg-cream border border-white/60 shadow-card",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition sm:w-auto ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}
