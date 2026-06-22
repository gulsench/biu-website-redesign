// All copy + structured data for the BIU homepage — single source of truth.
// Layout/hierarchy mirrors a reference marketing template; all copy is original
// to Boast It UP (BIU) and grounded in its mission: AI Growth Intelligence.

/** Heading segment — accent words get the green emphasis treatment. */
export type HeadlineSegment = { text: string; accent?: boolean };

// ── ANNOUNCEMENT BAR ────────────────────────────────────────────────────────
export const announcement =
  "AI search is the new front page. See where your brand stands — free.";

// ── NAV ─────────────────────────────────────────────────────────────────────
export const navLinks: { label: string; href: string }[] = [
  { label: "Platform", href: "#platform" },
  { label: "Modules", href: "#modules" },
  { label: "Why BIU", href: "#compare" },
  { label: "FAQ", href: "#faq" },
];

export const navCtas = {
  secondary: "Sign in",
};

/** Canonical engine list — use for all copy enumerations. */
export const ENGINE_NAMES =
  "ChatGPT, Perplexity, Google AI Overviews, Gemini, and Claude";

// ── HERO ──────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "AI Growth Intelligence Platform",
  h1: [
    { text: "Know how your brand shows up in " },
    { text: "AI answers.", accent: true },
  ] satisfies HeadlineSegment[],
  lead: `Buyers ask ${ENGINE_NAMES} before they ask you.`,
  sub: "BIU measures your presence across 5 AI answer engines, finds the one root cause behind the gap, and hands your team the next move — not another dashboard.",
  ctaPrimary: "Get your free AI visibility audit",
  ctaSecondary: "See how it works",
};

// ── OUTCOMES STRIP (what you get to see) ────────────────────────────────────
export const outcomes: { value: string; label: string }[] = [
  { value: "1", label: "Market Momentum Score" },
  { value: "4", label: "Intelligence modules" },
  { value: "5", label: "Answer engines tracked" },
  { value: "14 days", label: "To first root-cause alert" },
  { value: "24h", label: "To first category insight" },
  { value: "0", label: "Reports to read" },
];

// ── ANSWER ENGINES (logo-row equivalent) ────────────────────────────────────
export const enginesHeading = "Measured across the engines buyers actually ask";

export type EngineIcon =
  | "openai"
  | "perplexity"
  | "google"
  | "gemini"
  | "claude";

export const engines: { name: string; icon: EngineIcon }[] = [
  { name: "ChatGPT", icon: "openai" },
  { name: "Perplexity", icon: "perplexity" },
  { name: "Google AI Overviews", icon: "google" },
  { name: "Gemini", icon: "gemini" },
  { name: "Claude", icon: "claude" },
];

// ── STATEMENT (single large idea) ───────────────────────────────────────────
export const statement = {
  lead: "Ranking #1 on Google no longer means you're found.",
  body: "For a growing share of buyers, the answer engine is the destination. If your brand isn't in the answer, you're not in the consideration set.",
};

// ── FEATURE SECTIONS (modules) ──────────────────────────────────────────────
export type MockVariant = "search" | "reputation" | "ecom" | "reach";

export interface FeatureSection {
  id: string;
  eyebrow: string;
  title: HeadlineSegment[];
  body: string;
  bullets: string[];
  mock: MockVariant;
  status?: "Coming soon";
}

export const features: FeatureSection[] = [
  {
    id: "competitive",
    eyebrow: "Competitive Intelligence",
    title: [
      { text: "See where competitors appear in " },
      { text: "AI answers.", accent: true },
      { text: " — before you do." },
    ],
    body: "Track your AI Share of Search (the percentage of AI-generated answers in your category where your brand appears) across categories, keyword clusters, and competitors. Know the day a rival starts winning the answer you're missing from.",
    bullets: [
      "AI Share of Search & Share of Voice",
      "Competitive benchmarking by category",
      "LLM visibility across every engine",
    ],
    mock: "search",
  },
  {
    id: "reputation",
    eyebrow: "Reputation Intelligence",
    title: [
      { text: "The gap between being found and being " },
      { text: "chosen", accent: true },
      { text: "." },
    ],
    body: "Your Reputation Signal is moved by review velocity and authority — not star ratings alone. BIU names the gap and the cadence needed to close it.",
    bullets: [
      "Brand trust & sentiment monitoring",
      "Review velocity intelligence",
      "Authority and citation tracking",
    ],
    mock: "reputation",
    status: "Coming soon",
  },
  {
    id: "ecom",
    eyebrow: "Ecommerce Intelligence",
    title: [
      { text: "Every ranking gap is a " },
      { text: "revenue number", accent: true },
      { text: "." },
    ],
    body: "BIU connects product visibility to the conversion it's costing you, so a ranking drop reads as dollars — not a position you have to interpret.",
    bullets: [
      "Product visibility scoring",
      "Conversion & marketplace performance",
      "Revenue-driver attribution",
    ],
    mock: "ecom",
    status: "Coming soon",
  },
  {
    id: "voice",
    eyebrow: "Voice Intelligence",
    title: [
      { text: "Winning organic reach, or " },
      { text: "buying every eyeball", accent: true },
      { text: "?" },
    ],
    body: "Reach Velocity shows whether your distribution is compounding or stalling — and catches the single posting change that ripples across channels.",
    bullets: [
      "Organic reach velocity",
      "Content performance signals",
      "Audience engagement trends",
    ],
    mock: "reach",
    status: "Coming soon",
  },
];

// ── PLATFORM (capability grid) ──────────────────────────────────────────────
export const platform: { tag: string; title: string; body: string }[] = [
  {
    tag: "Measure",
    title: "AI visibility, quantified",
    body: `AI Share of Search and Share of Voice across ${ENGINE_NAMES} — by category and competitor.`,
  },
  {
    tag: "Unify",
    title: "One Market Momentum Score",
    body: "Visibility, reputation, ecommerce, and reach folded into a single score your whole team can rally around.",
  },
  {
    tag: "Diagnose",
    title: "Root-cause alerts",
    body: "When signals move, BIU finds the one change behind them — and flags it within 14 days, not next quarter.",
  },
  {
    tag: "Act",
    title: "Prioritised playbooks",
    body: "Every alert ships with the next move, ranked by impact, so the briefing already has the answer.",
  },
  {
    tag: "Benchmark",
    title: "Category intelligence",
    body: "See what a strong score looks like in your category, and exactly how far the leaders are ahead.",
  },
  {
    tag: "Monitor",
    title: "An always-on loop",
    body: "Continuous monitoring across 5 AI answer engines and every channel — the loop refines as your brand moves.",
  },
];

// ── COMPARISON (with / without BIU) ─────────────────────────────────────────
export const comparison = {
  withoutLabel: "Your stack today",
  withLabel: "With BIU",
  rows: [
    {
      without: "Keyword tools that can't see AI answers",
      with: "AI Share of Search measured across 5 answer engines",
    },
    {
      without: "Signals scattered across five dashboards",
      with: "One Market Momentum Score",
    },
    {
      without: "Charts your team has to interpret",
      with: "The root cause, named for you",
    },
    {
      without: "Find out next quarter",
      with: "Root-cause alert in 14 days",
    },
    {
      without: "Guess the next move",
      with: "A prioritised playbook, ranked by impact",
    },
  ],
};

// ── FAQ ─────────────────────────────────────────────────────────────────────
export const faq: { q: string; a: string }[] = [
  {
    q: "What is AI Share of Search?",
    a: `It's the percentage of AI-generated answers in a category where your brand appears — measured across ${ENGINE_NAMES}. For most brands today, that number is close to zero.`,
  },
  {
    q: "How is this different from Semrush or other SEO tools?",
    a: "Keyword tools measure where you rank on Google. They can't see AI-generated answers. BIU measures the visibility layer those tools miss — and connects it to reputation, ecommerce, and reach.",
  },
  {
    q: "What do I get from the free audit?",
    a: "Your category run against 5 AI answer engines, your current AI Share of Search, and the single biggest gap between you and the leaders — no demo call required.",
  },
  {
    q: "Which modules are available now?",
    a: "Competitive Intelligence is live today. Reputation, Ecommerce, and Voice Intelligence are rolling out — all feeding the same Market Momentum Score.",
  },
  {
    q: "Who is BIU built for?",
    a: "D2C and SME brand teams competing in AI-era markets — founders, CMOs, and growth leads who need one source of truth instead of five disconnected tools.",
  },
  {
    q: "How fast can we get started?",
    a: "The free audit takes minutes. Once connected, BIU surfaces a category-level insight within 24 hours and a first root-cause alert within 14 days.",
  },
];

// ── CLOSING CTA ─────────────────────────────────────────────────────────────
export const closingCta = {
  headline: [
    { text: "Your competitors are already in the answer. " },
    { text: "Close the gap", accent: true },
    { text: "." },
  ] satisfies HeadlineSegment[],
  sub: "Run your free AI visibility audit and see exactly where your brand stands.",
  cta: "Get your free AI visibility audit",
};

// ── FOOTER ──────────────────────────────────────────────────────────────────
export const footer = {
  tagline:
    "The AI Growth Intelligence platform. Built for brands that compete in AI-era markets.",
  email: "hello@boastitup.com",
  columns: [
    {
      title: "Platform",
      links: ["Competitive Intelligence", "Modules"],
    },
    {
      title: "Solutions",
      links: ["AI Visibility", "For Brand Teams", "For D2C Brands"],
    },
    {
      title: "Resources",
      links: ["Benchmarks", "Blog", "Glossary"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"],
    },
  ],
  social: [
    { label: "X", icon: "x" },
    { label: "LinkedIn", icon: "linkedin" },
    { label: "Instagram", icon: "instagram" },
    { label: "YouTube", icon: "youtube" },
  ],
  legalLeft: "© 2026 Boast It UP · boastitup.com",
  legalRight: "",
};
