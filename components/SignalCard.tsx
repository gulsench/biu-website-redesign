"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { signalCard, type SignalState } from "@/lib/content";
import { cn } from "@/lib/cn";

const stateColor: Record<SignalState, string> = {
  up: "text-up",
  down: "text-down",
  warn: "text-warn",
};

// Looping showcase timeline (ms per phase)
const PHASES = [
  "userTyping",
  "userSent",
  "botTyping",
  "rows",
  "insight",
  "hold",
] as const;
type Phase = (typeof PHASES)[number];
const at = (p: Phase) => PHASES.indexOf(p);

const DURATION: Record<Phase, number> = {
  userTyping: 1400,
  userSent: 450,
  botTyping: 1050,
  rows: 1500,
  insight: 3200,
  hold: 2600,
};

const prompt = signalCard.userPrompt;

export function SignalCard() {
  const reduce = useReducedMotion();
  const [phaseIdx, setPhaseIdx] = useState(reduce ? at("hold") : 0);
  const [loop, setLoop] = useState(0);
  const [typed, setTyped] = useState(reduce ? prompt.length : 0);

  // Drive the phase sequence; bump `loop` at the end to replay enter animations.
  useEffect(() => {
    if (reduce) return;
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;
    setPhaseIdx(0);
    const run = () => {
      timer = setTimeout(() => {
        if (idx < PHASES.length - 1) {
          idx += 1;
          setPhaseIdx(idx);
          run();
        } else {
          setLoop((l) => l + 1);
        }
      }, DURATION[PHASES[idx]]);
    };
    run();
    return () => clearTimeout(timer);
  }, [reduce, loop]);

  // Typewriter for the user prompt during its phase.
  useEffect(() => {
    if (reduce) return;
    if (PHASES[phaseIdx] !== "userTyping") {
      setTyped(prompt.length);
      return;
    }
    setTyped(0);
    const per = DURATION.userTyping / (prompt.length + 4);
    const iv = setInterval(
      () => setTyped((t) => (t < prompt.length ? t + 1 : t)),
      per
    );
    return () => clearInterval(iv);
  }, [phaseIdx, reduce, loop]);

  const showUser = phaseIdx >= at("userTyping");
  const showBot = phaseIdx >= at("botTyping");
  const showRows = phaseIdx >= at("rows");
  const showInsight = phaseIdx >= at("insight");
  const botTyping = PHASES[phaseIdx] === "botTyping";

  const rowsContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const rowItem: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 6 },
    visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.3 } },
  };

  const words = signalCard.insight.flatMap((seg, si) =>
    seg.text
      .split(/(\s+)/)
      .filter((w) => w.length > 0)
      .map((w, wi) => ({
        key: `${si}-${wi}`,
        text: w,
        bold: !!seg.bold,
        isSpace: /^\s+$/.test(w),
      }))
  );
  const insightContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.02 } },
  };
  const word: Variants = {
    hidden: { opacity: reduce ? 1 : 0.15 },
    visible: { opacity: 1, transition: { duration: reduce ? 0 : 0.18 } },
  };

  return (
    <motion.div
      animate={reduce ? undefined : { y: [0, -4, 0, 4, 0] }}
      transition={
        reduce
          ? undefined
          : { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }
      className="relative overflow-hidden rounded-card border border-border bg-white/80 shadow-soft backdrop-blur-md"
    >
      {/* Soft green blur backdrop */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-[140%] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "var(--brand-glow)", opacity: 0.6 }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
        style={{ background: "#86efac", opacity: 0.32 }}
      />

      <div className="relative flex h-[420px] flex-col">
        {/* Chat header — bot identity */}
        <div className="flex items-center gap-3 border-b border-border/80 bg-[color-mix(in_srgb,var(--brand-glow)_45%,white)] px-5 py-3">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-grad text-[15px] text-white shadow-soft"
          >
            ◆
          </span>
          <span className="leading-tight">
            <span className="block text-[13px] font-bold text-ink">
              BIU Copilot
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-mid">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-up" />
              {signalCard.status}
            </span>
          </span>
        </div>

        {/* Conversation — remounts each loop to replay enter animations */}
        <div
          key={loop}
          className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4"
        >
          {/* User message */}
          {showUser && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              className="flex justify-end"
            >
              <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-ink px-3.5 py-2 text-[12px] leading-relaxed text-white">
                {reduce ? prompt : prompt.slice(0, typed)}
                {!reduce && PHASES[phaseIdx] === "userTyping" && (
                  <motion.span
                    aria-hidden
                    className="ml-0.5 inline-block h-3 w-px translate-y-0.5 bg-white/70"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </p>
            </motion.div>
          )}

          {/* Bot message */}
          {showBot && (
            <motion.div
              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              className="flex justify-start"
            >
              <div className="max-w-[92%] rounded-2xl rounded-bl-sm border border-border bg-white px-3.5 py-3 shadow-soft">
                <p className="eyebrow-text mb-2 text-brand-700">
                  {signalCard.copilotLabel}
                </p>

                <AnimatePresence mode="wait">
                  {botTyping && !showRows ? (
                    <motion.div
                      key="dots"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1 py-1"
                    >
                      {[0, 1, 2].map((d) => (
                        <motion.span
                          key={d}
                          className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                          transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            delay: d * 0.15,
                          }}
                        />
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div key="answer">
                      {/* Metric rows */}
                      {showRows && (
                        <motion.div
                          variants={rowsContainer}
                          initial="hidden"
                          animate="visible"
                          className="divide-y divide-border/70"
                        >
                          {signalCard.rows.map((row) => (
                            <motion.div
                              key={row.label}
                              variants={rowItem}
                              className="flex items-center justify-between py-2"
                            >
                              <span className="text-[11.5px] text-mid">
                                {row.label}
                              </span>
                              <span
                                className={cn(
                                  "font-mono text-[12px] font-bold tabular-nums",
                                  stateColor[row.state]
                                )}
                              >
                                {row.value}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Insight line */}
                      {showInsight && (
                        <motion.p
                          variants={insightContainer}
                          initial="hidden"
                          animate="visible"
                          className="mt-3 border-t border-border/70 pt-3 text-[12px] leading-relaxed text-mid"
                          aria-label={signalCard.insight
                            .map((s) => s.text)
                            .join("")}
                        >
                          {words.map((w) =>
                            w.isSpace ? (
                              <span key={w.key}> </span>
                            ) : (
                              <motion.span
                                key={w.key}
                                variants={word}
                                className={cn(
                                  "inline-block",
                                  w.bold && "font-semibold text-ink"
                                )}
                              >
                                {w.text}
                              </motion.span>
                            )
                          )}
                        </motion.p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </div>

        {/* Faux input row — reinforces the chatbot framing */}
        <div className="border-t border-border/80 px-4 py-3">
          <div className="flex items-center gap-2 rounded-pill border border-border bg-white px-3.5 py-2">
            <span className="flex-1 text-[11.5px] text-muted">
              Ask BIU Copilot…
            </span>
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-grad text-[11px] text-white"
            >
              ↑
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
