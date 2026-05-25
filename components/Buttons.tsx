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
      "bg-garden text-white hover:bg-deep border-2 border-deep shadow-card",
    secondary:
      "bg-linen text-deep hover:bg-white border-2 border-soil/20 shadow-card",
    light:
      "bg-white text-deep hover:bg-cream border-2 border-white/70 shadow-card",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold transition sm:w-auto ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  );
}
