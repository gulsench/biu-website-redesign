"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MockVariant } from "@/lib/content";
import { SignalCard } from "./SignalCard";

/** Clean, green-only product mockups shown beside each feature. */
export function FeatureMock({ variant }: { variant: MockVariant }) {
  if (variant === "copilot") return <SignalCard />;
  if (variant === "search") return <SearchMock />;
  if (variant === "reputation") return <ReputationMock />;
  if (variant === "ecom") return <EcomMock />;
  return <ReachMock />;
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.05)]">
      {children}
    </div>
  );
}

function PanelHead({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <p className="eyebrow-text text-muted">{label}</p>
      <span className="flex items-center gap-1.5 text-[11px] text-mid">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
        Live
      </span>
    </div>
  );
}

function SearchMock() {
  const reduce = useReducedMotion();
  const rows = [
    { name: "You", pct: 12 },
    { name: "Leader", pct: 78 },
    { name: "Competitor B", pct: 41 },
    { name: "Competitor C", pct: 23 },
  ];
  return (
    <Panel>
      <PanelHead label="AI Share of Search" />
      <div className="space-y-4">
        {rows.map((r, i) => (
          <div key={r.name}>
            <div className="mb-1.5 flex items-center justify-between text-[12.5px]">
              <span className={i === 0 ? "font-bold text-ink" : "text-mid"}>
                {r.name}
              </span>
              <span className="font-mono font-semibold text-ink">{r.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surfacealt">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: i === 0 ? "var(--brand-600)" : "var(--brand-400)",
                  opacity: i === 0 ? 1 : 0.55,
                }}
                initial={{ width: reduce ? `${r.pct}%` : 0 }}
                whileInView={{ width: `${r.pct}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: reduce ? 0 : 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5 border-t border-border pt-4 text-[12px] text-mid">
        You appear in <span className="font-semibold text-ink">12%</span> of
        category answers. The leader appears in{" "}
        <span className="font-semibold text-ink">78%</span>.
      </p>
    </Panel>
  );
}

function ReputationMock() {
  const reduce = useReducedMotion();
  const score = 58;
  const circumference = 2 * Math.PI * 52;
  return (
    <Panel>
      <PanelHead label="Reputation Signal" />
      <div className="flex items-center gap-6">
        <div className="relative h-32 w-32 flex-shrink-0">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" stroke="var(--border)" strokeWidth="12" />
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--brand-600)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: reduce ? circumference * (1 - score / 100) : circumference }}
              whileInView={{ strokeDashoffset: circumference * (1 - score / 100) }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold tracking-tight text-ink">{score}</span>
            <span className="text-[10px] text-muted">/ 100</span>
          </div>
        </div>
        <ul className="space-y-3 text-[12.5px]">
          {[
            ["Review velocity", "Below cadence"],
            ["Sentiment", "Stable"],
            ["Authority", "Improving"],
          ].map(([k, v]) => (
            <li key={k} className="flex flex-col">
              <span className="text-muted">{k}</span>
              <span className="font-semibold text-ink">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  );
}

function EcomMock() {
  const reduce = useReducedMotion();
  return (
    <Panel>
      <PanelHead label="Product Visibility → Revenue" />
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[12px] text-muted">Visibility score</p>
          <p className="mt-1 text-2xl font-extrabold tracking-tight text-ink">
            48 <span className="text-muted">→</span> 72
          </p>
        </div>
        <motion.div
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduce ? 0 : 0.5 }}
          className="rounded-xl bg-surfacealt px-4 py-3 text-right"
        >
          <p className="text-[12px] text-muted">Est. organic conversion</p>
          <p className="mt-0.5 text-xl font-extrabold tracking-tight text-brand-600">
            +$80k<span className="text-[12px] font-semibold text-mid">/qtr</span>
          </p>
        </motion.div>
      </div>
      <div className="mt-5 flex items-end gap-1.5">
        {[34, 40, 38, 46, 52, 60, 66, 72].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ background: i >= 6 ? "var(--brand-600)" : "var(--brand-400)", opacity: i >= 6 ? 1 : 0.4 }}
            initial={{ height: reduce ? h : 0 }}
            whileInView={{ height: h }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduce ? 0 : 0.6, delay: i * 0.05 }}
          />
        ))}
      </div>
    </Panel>
  );
}

function ReachMock() {
  const reduce = useReducedMotion();
  const pts = [22, 26, 24, 30, 28, 20, 16, 14];
  const max = 32;
  const w = 280;
  const h = 90;
  const step = w / (pts.length - 1);
  const path = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  return (
    <Panel>
      <PanelHead label="Reach Velocity" />
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-extrabold tracking-tight text-ink">
          71 <span className="text-base font-semibold text-mid">↓ from 76</span>
        </p>
        <span className="rounded-full bg-surfacealt px-2.5 py-1 text-[11px] font-medium text-mid">
          Posting −60%
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 w-full overflow-visible">
        <motion.path
          d={path}
          fill="none"
          stroke="var(--brand-600)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: "easeInOut" }}
        />
      </svg>
      <p className="mt-4 border-t border-border pt-4 text-[12px] text-mid">
        One posting change is rippling across three channels.
      </p>
    </Panel>
  );
}
