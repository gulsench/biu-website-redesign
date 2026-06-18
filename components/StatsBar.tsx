"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { statsBar } from "@/lib/content";

/** Parses "300+", "24h", "4" into { num, prefix, suffix } for count-up. */
function parseStat(raw: string) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { num: null as number | null, prefix: "", suffix: raw };
  return { num: Number(match[2]), prefix: match[1], suffix: match[3] };
}

function CountUp({ value }: { value: string }) {
  const { num, prefix, suffix } = parseStat(value);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(reduce || num === null ? num ?? 0 : 0);

  useEffect(() => {
    if (num === null || reduce || !inView) {
      if (num !== null && (reduce || inView)) setDisplay(num);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * num));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num, reduce]);

  return (
    <span ref={ref} className="tabular-nums">
      {num === null ? suffix : `${prefix}${display}${suffix}`}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-ink py-10 text-white">
      <div className="mx-auto max-w-container px-6">
        <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsBar.map((s) => (
            <div key={s.label}>
              <dd className="text-4xl font-extrabold tracking-tight text-white">
                <CountUp value={s.num} />
              </dd>
              <dt className="mt-1 text-xs text-white/55">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
