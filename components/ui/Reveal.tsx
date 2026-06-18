"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

/**
 * Scroll-reveal: subtle 12px rise on view. Opacity stays at 1 so content
 * is never hidden if the intersection observer fails to fire.
 */
export function Reveal({
  children,
  className,
  stagger = false,
  delay = 0,
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  const container: Variants = {
    hidden: { opacity: 1, y: reduce ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay,
            ...(stagger ? { staggerChildren: 0.06 } : {}),
          },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={reduce || inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 1, y: reduce ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={item}>
      {children}
    </MotionTag>
  );
}
