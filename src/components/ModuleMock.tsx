import type { ReactNode } from "react";
import type { PillarId } from "@/lib/modules";
import {
  ModuleCard,
  ModuleCardDivider,
  ModuleCardFooter,
  ModuleCardHeader,
  ModuleCardSubtitle,
  ModuleDonut,
  ModuleListItem,
  ModuleMetricGrid,
  ModuleProgressList,
  ModuleRankRow,
  ModuleSectionLabel,
  ModuleSparkline,
  ModuleTableRow,
  moduleBadgeClass,
  moduleChipClass,
} from "@/components/ModuleCard";
import { cn } from "@/lib/utils";

function SocialContentMock() {
  const formats = [
    { label: "Reels", pct: 84 },
    { label: "Carousels", pct: 57 },
    { label: "Static Posts", pct: 28 },
    { label: "Text Only", pct: 15 },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Content"
        score={74}
        suffix="/100"
        delta="+8 vs last month"
        deltaUp
      />
      <ModuleCardSubtitle>What you post — how each format performs</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleProgressList rows={formats.map((row, i) => ({ ...row, highlight: i === 0 }))} />
    </ModuleCard>
  );
}

function SocialHashtagMock() {
  const working = [
    { tag: "#BrandIntelligence", note: "↑ reach/post" },
    { tag: "#MarketingOps", note: "↑ reach/post" },
  ];
  const hurting = [
    { tag: "#Marketing", note: "too broad" },
    { tag: "#SocialMedia", note: "saturated" },
  ];
  const opportunities = ["#AIMarketing", "#B2BGrowth", "#GrowthOps"];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Hashtag"
        score={58}
        suffix="/100"
        delta="−4 vs last month"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Which tags amplify reach — which ones bury you</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="space-y-4">
        <div>
          <ModuleSectionLabel>Working</ModuleSectionLabel>
          <div className="space-y-2">
            {working.map((t) => (
              <div key={t.tag} className="flex items-center justify-between gap-2 text-[12px]">
                <span className="truncate font-medium text-color-text">{t.tag}</span>
                <span className="shrink-0 text-color-text-muted">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-color-border pt-4">
          <ModuleSectionLabel>Hurting reach</ModuleSectionLabel>
          <div className="space-y-2">
            {hurting.map((t) => (
              <div key={t.tag} className="flex items-center justify-between gap-2 text-[12px]">
                <span className="truncate font-medium text-color-text">{t.tag}</span>
                <span className="shrink-0 text-color-text-muted">{t.note}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 border-t border-color-border pt-4">
          {opportunities.map((tag) => (
            <span key={tag} className={cn(moduleChipClass(false), "text-[10px]")}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ModuleCard>
  );
}

function SocialCommentsMock() {
  const positive = 65;
  const neutral = 22;
  const negative = 13;
  const themes = ["Love the content", "Pricing concern", "Want a demo"];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Comments"
        score={82}
        suffix="/100"
        delta="+12 vs last month"
        deltaUp
      />
      <ModuleCardSubtitle>What your audience actually says about you</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="flex items-center gap-5">
        <ModuleDonut value={positive} sublabel="positive" label="Positive sentiment" />
        <ul className="min-w-0 flex-1 space-y-2 text-[12px]">
          {[
            ["Positive", `${positive}%`, "text-color-text"],
            ["Neutral", `${neutral}%`, "text-color-text-muted"],
            ["Negative", `${negative}%`, "text-color-text-dim"],
          ].map(([k, v, color]) => (
            <li key={k} className="flex justify-between gap-2">
              <span className="text-color-text-muted">{k}</span>
              <span className={cn("font-mono font-semibold tabular-nums", color)}>{v}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-color-border pt-4">
        {themes.map((theme) => (
          <span key={theme} className={moduleChipClass(false)}>
            {theme}
          </span>
        ))}
      </div>
    </ModuleCard>
  );
}

function SocialEngagementMock() {
  const pts = [28, 32, 30, 36, 38, 42, 46, 50];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Engagement"
        score="4.2%"
        delta="vs 1.8% industry avg"
        deltaUp
      />
      <ModuleCardSubtitle>The one metric that predicts your growth</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleSparkline points={pts} label="8-week trend" accent />
      <div className="mt-4">
        <ModuleMetricGrid
        items={[
          ["Likes", "62%"],
          ["Comments", "19%"],
          ["Shares", "11%"],
          ["Saves", "8%"],
        ]}
        />
      </div>
      <ModuleCardFooter>2.3× industry average ↑</ModuleCardFooter>
    </ModuleCard>
  );
}

function AeoShareMock() {
  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Share of Search"
        score="18%"
        delta="in category answers"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Who owns the AI answer in your category right now</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleProgressList
        rows={[
          { label: "You", pct: 18, activeTags: ["P", "G"], highlight: true },
          { label: "Rival A", pct: 34, activeTags: ["C", "P", "G"] },
          { label: "Rival B", pct: 22, activeTags: ["C", "G"] },
          { label: "Rival C", pct: 15, activeTags: ["P"] },
        ]}
        tags={["C", "P", "G"]}
        legend="C = ChatGPT · P = Perplexity · G = Google AI"
      />
    </ModuleCard>
  );
}

function AeoGapsMock() {
  const gaps = [
    { topic: "AI brand monitoring", you: false, opp: "HIGH", tone: "neutral" as const },
    { topic: "Reputation scoring tools", you: false, opp: "URGENT", tone: "threat" as const },
    { topic: "Best AEO platforms", you: true, opp: "LEAD", tone: "lead" as const },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Answer Gaps"
        score={23}
        suffix=" gaps"
        delta="across engines"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Queries rivals win. You&apos;re completely invisible.</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="mb-2 grid grid-cols-[minmax(0,1fr)_24px_52px] gap-2 font-mono text-[9px] uppercase tracking-[0.08em] text-color-text-dim sm:grid-cols-[1fr_28px_56px]">
        <span>Topic</span>
        <span className="text-center">You</span>
        <span className="text-right">Opp.</span>
      </div>
      <div className="divide-y divide-color-border">
        {gaps.map((gap) => (
          <ModuleTableRow
            key={gap.topic}
            cols={[
              gap.topic,
              gap.you ? "✓" : "✕",
              <span key={gap.opp} className={moduleBadgeClass(gap.tone)}>
                {gap.opp}
              </span>,
            ]}
          />
        ))}
      </div>
    </ModuleCard>
  );
}

function AeoAlertsMock() {
  const alerts = [
    { title: "Rival A cited in ChatGPT for pricing", meta: "2 days ago", status: "THREAT", tone: "threat" as const },
    { title: "Rival B added Perplexity source link", meta: "4 days ago", status: "MONITOR", tone: "monitor" as const },
    { title: "Category query volume up 12%", meta: "This week", status: "SIGNAL", tone: "signal" as const },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Citation Alerts"
        score={3}
        suffix=" new"
        delta="this week"
        deltaUp={false}
      />
      <ModuleCardSubtitle>What changed in AI answers you don&apos;t know about yet</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="divide-y divide-color-border">
        {alerts.map((alert) => (
          <ModuleListItem
            key={alert.title}
            title={alert.title}
            meta={alert.meta}
            badge={alert.status}
            badgeTone={alert.tone}
          />
        ))}
      </div>
    </ModuleCard>
  );
}

function AeoScoreMock() {
  const rivals = [
    { name: "You", score: 71, rank: "2nd", highlight: true },
    { name: "Rival A", score: 84, rank: "1st" },
    { name: "Rival B", score: 58, rank: "3rd" },
    { name: "Rival C", score: 43, rank: "4th" },
  ];
  const engines = ["GPT", "Perp", "GAI", "Claude"];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="AEO Score"
        score={71}
        delta="#2 in category"
        deltaUp
      />
      <ModuleCardSubtitle>Your score vs rivals — the one number that settles it</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="mb-3 flex flex-wrap gap-1.5">
        {engines.map((e, i) => (
          <span key={e} className={moduleChipClass(i === 0)}>
            {e}
          </span>
        ))}
      </div>
      <div className="space-y-0.5">
        {rivals.map((r) => (
          <ModuleRankRow
            key={r.name}
            name={r.name}
            score={r.score}
            rank={r.rank}
            highlight={r.highlight}
          />
        ))}
      </div>
    </ModuleCard>
  );
}

function CompShareMock() {
  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Share of Voice"
        score="18%"
        delta="of category conversation"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Who owns the conversation in your category right now</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleProgressList
        rows={[
          { label: "You", pct: 18, activeTags: ["A"], highlight: true },
          { label: "Rival A", pct: 34, activeTags: ["G", "S", "A"] },
          { label: "Rival B", pct: 22, activeTags: ["G", "S"] },
          { label: "Rival C", pct: 15, activeTags: ["G"] },
        ]}
        tags={["G", "S", "A"]}
        legend="G = Google · S = Social · A = AI Search"
      />
    </ModuleCard>
  );
}

function CompGapsMock() {
  const gaps = [
    { topic: "AI brand monitoring", you: false, opp: "HIGH", tone: "neutral" as const },
    { topic: "Reputation scoring", you: false, opp: "URGENT", tone: "threat" as const },
    { topic: "Competitive intelligence", you: true, opp: "LEAD", tone: "lead" as const },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Content Gap"
        score={23}
        suffix=" gaps"
        delta="vs rivals"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Topics rivals rank for. You&apos;re completely invisible.</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="mb-2 grid grid-cols-[minmax(0,1fr)_24px_52px] gap-2 font-mono text-[9px] uppercase tracking-[0.08em] text-color-text-dim sm:grid-cols-[1fr_28px_56px]">
        <span>Topic</span>
        <span className="text-center">You</span>
        <span className="text-right">Opp.</span>
      </div>
      <div className="divide-y divide-color-border">
        {gaps.map((gap) => (
          <ModuleTableRow
            key={gap.topic}
            cols={[
              gap.topic,
              gap.you ? "✓" : "✕",
              <span key={gap.opp} className={moduleBadgeClass(gap.tone)}>
                {gap.opp}
              </span>,
            ]}
          />
        ))}
      </div>
    </ModuleCard>
  );
}

function CompMovesMock() {
  const moves = [
    { title: "Rival A launched new pricing tier", meta: "2 days ago", status: "THREAT", tone: "threat" as const },
    { title: "Rival B published category report", meta: "4 days ago", status: "MONITOR", tone: "monitor" as const },
    { title: "Category search volume up 9%", meta: "This week", status: "SIGNAL", tone: "signal" as const },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Move Tracker"
        score={3}
        suffix=" moves"
        delta="this week"
        deltaUp={false}
      />
      <ModuleCardSubtitle>What rivals did this week you don&apos;t know about yet</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="divide-y divide-color-border">
        {moves.map((move) => (
          <ModuleListItem
            key={move.title}
            title={move.title}
            meta={move.meta}
            badge={move.status}
            badgeTone={move.tone}
          />
        ))}
      </div>
    </ModuleCard>
  );
}

function CompBenchmarkMock() {
  const rivals = [
    { name: "You", score: 71, rank: "2nd", highlight: true },
    { name: "Rival A", score: 84, rank: "1st" },
    { name: "Rival B", score: 58, rank: "3rd" },
    { name: "Rival C", score: 43, rank: "4th" },
  ];
  const modules = ["AEO", "SOC", "CMP", "REP"];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Benchmark Score"
        score={71}
        delta="#2 in category"
        deltaUp
      />
      <ModuleCardSubtitle>Your score vs rivals — the one number that settles it</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="mb-3 flex flex-wrap gap-1.5">
        {modules.map((m, i) => (
          <span key={m} className={moduleChipClass(i === 0)}>
            {m}
          </span>
        ))}
      </div>
      <div className="space-y-0.5">
        {rivals.map((r) => (
          <ModuleRankRow
            key={r.name}
            name={r.name}
            score={r.score}
            rank={r.rank}
            highlight={r.highlight}
          />
        ))}
      </div>
    </ModuleCard>
  );
}

function RepAwarenessMock() {
  const pts = [42, 44, 46, 48, 50, 52, 55, 58];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Awareness"
        score={62}
        delta="+6 vs last quarter"
        deltaUp
      />
      <ModuleCardSubtitle>How visible your brand is before buyers start comparing</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleMetricGrid
        items={[
          ["Brand mentions", "1.2k/mo"],
          ["Category share", "14%"],
        ]}
      />
      <div className="mt-4">
        <ModuleSparkline points={pts} label="Mention trend" accent />
      </div>
    </ModuleCard>
  );
}

function RepTrustMock() {
  const score = 58;
  const sources = [
    { name: "G2", status: "Below cadence" },
    { name: "Trustpilot", status: "On track" },
    { name: "Capterra", status: "Improving" },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Trust"
        score={score}
        delta="−3 vs last month"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Review velocity and sentiment that move your Reputation Signal</ModuleCardSubtitle>
      <ModuleCardDivider />
      <div className="flex items-center gap-5">
        <ModuleDonut value={score} sublabel="/100" label="Trust score" />
        <ul className="min-w-0 flex-1 space-y-2 text-[12px]">
          {sources.map((s) => (
            <li key={s.name} className="flex justify-between gap-2 border-b border-color-border pb-2 last:border-b-0 last:pb-0">
              <span className="text-color-text-muted">{s.name}</span>
              <span className="truncate font-mono text-[11px] font-medium text-color-text">
                {s.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ModuleCard>
  );
}

function RepConsiderationMock() {
  const themes = ["Best for enterprise", "Pricing concern", "Easy integration"];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Consideration"
        score="34%"
        delta="of buyer shortlists"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Whether you make the list when buyers start comparing</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleProgressList
        rows={[
          { label: "You", pct: 34, highlight: true },
          { label: "Leader", pct: 67 },
          { label: "Category avg", pct: 48 },
        ]}
      />
      <div className="mt-3 flex flex-wrap gap-1.5 border-t border-color-border pt-4">
        {themes.map((theme) => (
          <span key={theme} className={moduleChipClass(false)}>
            {theme}
          </span>
        ))}
      </div>
    </ModuleCard>
  );
}

function RepChoiceMock() {
  const drivers = [
    { label: "Integration depth", rank: "3rd", strong: false },
    { label: "Support quality", rank: "2nd", strong: true },
    { label: "Time to value", rank: "4th", strong: false },
  ];

  return (
    <ModuleCard>
      <ModuleCardHeader
        label="Choice"
        score={48}
        delta="win-rate signal"
        deltaUp={false}
      />
      <ModuleCardSubtitle>Why buyers pick you — or pass you over</ModuleCardSubtitle>
      <ModuleCardDivider />
      <ModuleSectionLabel>Top choice drivers</ModuleSectionLabel>
      <div className="divide-y divide-color-border">
        {drivers.map((d) => (
          <div
            key={d.label}
            className="flex items-center justify-between gap-2 py-3 text-[13px] first:pt-0 last:pb-0"
          >
            <span className="truncate text-color-text">{d.label}</span>
            <span className={cn("shrink-0", moduleChipClass(false))}>
              {d.rank}
            </span>
          </div>
        ))}
      </div>
      <ModuleMetricGrid
        items={[
          ["Chosen for", "Support"],
          ["Lost to", "Integration"],
        ]}
      />
    </ModuleCard>
  );
}

const MOCKS: Record<PillarId, () => ReactNode> = {
  "share-of-search": AeoShareMock,
  "answer-gaps": AeoGapsMock,
  "citation-alerts": AeoAlertsMock,
  "aeo-score": AeoScoreMock,
  content: SocialContentMock,
  hashtag: SocialHashtagMock,
  comments: SocialCommentsMock,
  engagement: SocialEngagementMock,
  "share-of-voice": CompShareMock,
  "content-gap": CompGapsMock,
  "move-tracker": CompMovesMock,
  "benchmark-score": CompBenchmarkMock,
  awareness: RepAwarenessMock,
  trust: RepTrustMock,
  consideration: RepConsiderationMock,
  choice: RepChoiceMock,
};

export function ModuleMock({ pillarId }: { pillarId: PillarId }) {
  const Mock = MOCKS[pillarId];
  return <Mock />;
}
