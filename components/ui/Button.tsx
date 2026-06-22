import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "audit" | "outline" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
}

const sizes: Record<Size, string> = {
  md: "text-[13px] px-5 py-2.5",
  lg: "text-[15px] px-7 py-3",
};

const primaryStyles = cn(
  "inline-flex items-center justify-center gap-2 rounded-xl border border-green-text/30 font-semibold",
  "bg-green-text text-band",
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_14px_rgba(74,222,128,0.25)]",
  "transition-[background-color,box-shadow,transform] duration-150",
  "hover:bg-[#5ef59a] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_18px_rgba(74,222,128,0.32)]",
  "active:translate-y-px active:bg-[#3dd070]",
);

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  if (variant === "primary" || variant === "audit") {
    return (
      <button
        type={type}
        className={cn(
          primaryStyles,
          "disabled:cursor-not-allowed disabled:opacity-60",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.05] font-semibold text-ink",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]",
          "transition-all duration-150 hover:border-white/30 hover:bg-white/[0.09] active:translate-y-px",
          "disabled:cursor-not-allowed disabled:opacity-60",
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-semibold text-mid transition-colors duration-150 hover:text-ink",
        "disabled:cursor-not-allowed disabled:opacity-60",
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
