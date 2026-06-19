import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center font-semibold rounded-[10px] transition-all duration-150 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-brand-600",
  outline:
    "border border-border bg-white text-ink hover:border-ink",
  ghost: "text-mid hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "text-[13px] px-4 py-2",
  lg: "text-[15px] px-6 py-3",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
