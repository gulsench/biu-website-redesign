import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: string;
  /** accent color token value applied to the text */
  color?: string;
  className?: string;
}

export function Eyebrow({ children, color, className }: EyebrowProps) {
  return (
    <p
      className={cn("eyebrow-text", className)}
      style={{ color: color ?? "var(--brand-600)" }}
    >
      {children}
    </p>
  );
}
