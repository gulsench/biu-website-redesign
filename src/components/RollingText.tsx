import { useId, useState, type ElementType } from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

interface RollingTextProps {
  text: string;
  className?: string;
  as?: ElementType;
  transition?: Transition;
  stagger?: number;
  reverse?: boolean;
}

/** Character roll on hover (ported from Framer Rolling Text). */
export function RollingText({
  text,
  className,
  as: Tag = "span",
  transition = { type: "spring", duration: 0.4, bounce: 0 } as const,
  stagger = 0,
  reverse = false,
}: RollingTextProps) {
  const [hovered, setHovered] = useState(false);
  const reactId = useId().replace(/:/g, "");
  const innerClass = `rolling-text-inner-${reactId}`;
  const lineHeight = "1.2em";
  const yOffset = `-${lineHeight}`;
  const baseDuration =
    "duration" in transition && typeof transition.duration === "number"
      ? transition.duration
      : 0.4;
  const staggerFactor = stagger / 100;

  return (
    <span
      className={cn("inline-flex overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Tag
        className={cn(
          innerClass,
          "flex w-max select-none overflow-hidden [text-shadow:0_1.2em_0_currentColor]",
        )}
        style={{ lineHeight }}
      >
        {[...text].map((char, index) => {
          const charIndex = reverse ? text.length - 1 - index : index;
          const delay =
            text.length > 0
              ? (baseDuration / text.length) * charIndex * staggerFactor
              : 0;

          return (
            <motion.span
              key={`${char}-${index}`}
              className="block shrink-0 whitespace-pre"
              initial={{ y: "0%" }}
              animate={{ y: hovered ? yOffset : "0%" }}
              transition={{ ...transition, delay }}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          );
        })}
      </Tag>
    </span>
  );
}
