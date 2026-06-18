// All copy + data — single source of truth. Copy is preserved verbatim from the
// source CDN-React homepage. Only presentation changes elsewhere.

export type ModuleId = "ci" | "rep" | "ecom" | "voice";

export interface ModuleItem {
  id: ModuleId;
  name: string;
  desc: string;
  features: string[];
  url: string;
  // Maps to a --mod-* token (text-mod-* / border-mod-*)
  hue: "ci" | "rep" | "ecom" | "voice";
  status: "ships-first" | "coming-soon";
}

export const modules: ModuleItem[] = [
  {
    id: "ci",
    name: "Competitive Intelligence",
    desc: "See exactly where competitors appear in AI answers before you do.",
    features: [
      "AI Share of Search",
      "AI Share of Voice",
      "Competitive Benchmarking",
      "LLM Visibility",
      "Category Intelligence",
    ],
    url: "/products/competitive-intelligence/",
    hue: "ci",
    status: "ships-first",
  },
  {
    id: "rep",
    name: "Reputation Intelligence",
    desc: "Reputation Signal — the gap between being found and being chosen.",
    features: [
      "Brand Trust Monitoring",
      "Sentiment Analysis",
      "Review Intelligence",
      "Authority Monitoring",
    ],
    url: "/products/reputation-intelligence/",
    hue: "rep",
    status: "coming-soon",
  },
  {
    id: "ecom",
    name: "Ecommerce Intelligence",
    desc: "Every ranking gap is a revenue gap. BIU names the number.",
    features: [
      "Product Visibility",
      "Conversion Intelligence",
      "Marketplace Performance",
      "Revenue Drivers",
    ],
    url: "/products/ecommerce-intelligence/",
    hue: "ecom",
    status: "coming-soon",
  },
  {
    id: "voice",
    name: "Voice Intelligence",
    desc: "Reach Velocity — are you winning organic reach or buying every eyeball?",
    features: [
      "Organic Reach",
      "Content Performance",
      "Audience Engagement",
      "Social Visibility",
    ],
    url: "/products/voice-intelligence/",
    hue: "voice",
    status: "coming-soon",
  },
];

export type Stage = "tofu" | "mofu" | "bofu";

export interface SitemapPage {
  url: string;
  label: string;
  stage: Stage;
  audience: string;
  cta: string;
  purpose: string;
  headline: string;
  sub: string;
  ctaLabel: string;
}

export const sitemapSections: Record<string, SitemapPage[]> = {
  Landing: [
    {
      url: "/",
      label: "Homepage",
      stage: "tofu",
      audience: "All visitors",
      cta: "Request Demo",
      purpose:
        "Category creation + hero entry point for AI Growth Intelligence",
      headline: "You rank #1 on Google. You don't appear once in ChatGPT.",
      sub: "For a growing share of buyers, that means you don't exist. BIU measures your AI Share of Search — and tells you exactly how to close the gap.",
      ctaLabel: "Get Your Free AI Visibility Audit",
    },
    {
      url: "/ai-growth-intelligence/",
      label: "What is AI Growth Intelligence",
      stage: "tofu",
      audience: "AI engines + TOFU",
      cta: "Explore Platform",
      purpose:
        "Category definition page — the entity page AI engines cite when asked to define this discipline",
      headline:
        "AI Growth Intelligence is a new discipline — and you're already late to it.",
      sub: "BIU measures brand presence across AI-generated answers, competitive share, reputation velocity, and ecommerce ranking — in a single intelligence layer.",
      ctaLabel: "Explore the Platform",
    },
    {
      url: "/ai-share-of-search/",
      label: "AI Share of Search — Pillar",
      stage: "tofu",
      audience: "SEO + Brand leads",
      cta: "Free Audit",
      purpose:
        "Definitive guide and primary AEO asset — the source ChatGPT and Perplexity cite",
      headline:
        "AI Share of Search is the metric your current stack doesn't measure.",
      sub: "It's the percentage of AI-generated answers in which your brand appears. Right now, for most brands, that number is 0%.",
      ctaLabel: "See Your AI Share of Search Score",
    },
    {
      url: "/ai-share-of-voice/",
      label: "AI Share of Voice — Pillar",
      stage: "tofu",
      audience: "Brand + Comms",
      cta: "Free Audit",
      purpose:
        "Secondary AEO anchor — brand presence relative to competitors in AI answers",
      headline:
        "Your AI Share of Voice tells you who's winning the conversation you're not in.",
      sub: "In the whey protein category, ON Whey appears in 78% of AI answers. If you're not measuring this, you're not competing.",
      ctaLabel: "Run Your Free AI Audit",
    },
    {
      url: "/free-audit/",
      label: "Free AI Visibility Audit",
      stage: "tofu",
      audience: "Organic visitors",
      cta: "Run Free Audit",
      purpose:
        "Primary lead magnet — low-friction entry to conversion funnel",
      headline:
        "Find out where your brand stands in AI answers. In under 60 seconds.",
      sub: "No credit card. No demo call required. BIU runs your category against ChatGPT, Perplexity, and Google AI Overviews — and shows you the gap.",
      ctaLabel: "Run My Free Audit",
    },
  ],
  Products: [
    {
      url: "/products/competitive-intelligence/",
      label: "Competitive Intelligence Hub",
      stage: "mofu",
      audience: "Brand / Growth",
      cta: "Request Demo",
      purpose:
        "Primary product hub — hero offering, the CI intelligence module",
      headline:
        "BIU identified that your AI Share of Search dropped 18pts while your competitor's climbed.",
      sub: "It's not 3 problems — it's one. Find the root cause behind multi-channel signal drops before your competitor capitalises on the gap.",
      ctaLabel: "Request Demo",
    },
    {
      url: "/products/competitive-intelligence/ai-share-of-search/",
      label: "AI Share of Search Feature",
      stage: "mofu",
      audience: "SEO / Brand leaders",
      cta: "See Demo",
      purpose:
        "Primary feature page — the measurement product for AI visibility",
      headline:
        "The first platform that tells you exactly where you appear — and disappear — in AI answers.",
      sub: "BIU tracks brand presence across ChatGPT, Perplexity, and Google AI Overviews by category, by keyword cluster, by competitor.",
      ctaLabel: "See It in Action",
    },
    {
      url: "/products/reputation-intelligence/",
      label: "Reputation Intelligence Hub",
      stage: "mofu",
      audience: "Brand / PR",
      cta: "Request Demo",
      purpose: "Reputation module hub — the trust and velocity layer",
      headline: "When they find you, does what they see make them choose you?",
      sub: "Your Reputation Signal is dragged by review velocity, not star ratings. BIU names the gap and tells you exactly how to close it in 60 days.",
      ctaLabel: "Request Demo",
    },
    {
      url: "/products/ecommerce-intelligence/",
      label: "Ecommerce Intelligence Hub",
      stage: "mofu",
      audience: "D2C / Marketplace",
      cta: "Request Demo",
      purpose:
        "Ecommerce module hub — ranking, conversion, and revenue attribution",
      headline: "Every product ranking gap is a revenue number. BIU names it.",
      sub: "Restoring your product visibility score from 48 → 72 on Amazon adds an estimated +$80k/quarter in organic conversion. That's the intelligence your current stack is missing.",
      ctaLabel: "Request Demo",
    },
    {
      url: "/products/voice-intelligence/",
      label: "Voice Intelligence Hub",
      stage: "mofu",
      audience: "Content / Social",
      cta: "Request Demo",
      purpose:
        "Voice/reach module hub — organic reach velocity and content performance",
      headline:
        "Are you winning organic distribution — or paying for every eyeball?",
      sub: "Reels posting dropped 60% in May — from 5 to 2 per week. That single change is now showing up across 3 channels. BIU found it in 14 days of monitoring.",
      ctaLabel: "Request Demo",
    },
    {
      url: "/products/biu-copilot/",
      label: "BIU Copilot",
      stage: "mofu",
      audience: "All evaluators",
      cta: "Start Free Trial",
      purpose: "AI Copilot feature page — the autonomous intelligence layer",
      headline:
        "BIU Copilot doesn't send reports. It runs the analysis and tells you the one thing to do right now.",
      sub: "Copilot synthesised 14 days of monitor data into a prioritised playbook. Phases 1–2 ran autonomously. Your move.",
      ctaLabel: "Start Free Trial",
    },
  ],
  Solutions: [
    {
      url: "/solutions/ai-visibility/",
      label: "AI Visibility",
      stage: "mofu",
      audience: "SEO / Brand",
      cta: "Request Demo",
      purpose:
        '"I need to appear in AI answers" — the job-to-be-done solution page',
      headline:
        "Your brand doesn't appear in ChatGPT answers. At this rate, your competitor earns that trust permanently.",
      sub: "FAQ page + brand definition → ChatGPT, Perplexity, Google AI Overviews inclusion in 4–6 weeks. BIU shows you the exact gap and builds the playbook.",
      ctaLabel: "Fix My AI Visibility",
    },
    {
      url: "/solutions/competitive-monitoring/",
      label: "Competitive Monitoring",
      stage: "mofu",
      audience: "Strategy / Growth",
      cta: "Request Demo",
      purpose:
        '"I need to track competitors" — solution for ongoing competitive awareness',
      headline:
        "You'll know your competitor moved the week after they moved. BIU tells you the day it happens.",
      sub: "Category intelligence, AI Share of Voice tracking, and competitive benchmarking — in one loop that runs without manual work.",
      ctaLabel: "Request Demo",
    },
    {
      url: "/solutions/for-brand-teams/",
      label: "For Brand Teams",
      stage: "mofu",
      audience: "CMOs / Brand Directors",
      cta: "Request Demo",
      purpose:
        "Team-specific solution page — value prop for brand and CMO audiences",
      headline:
        "The briefing your team reads at 9am should already have the answer — not a set of charts.",
      sub: "BIU delivers a Market Momentum Score, root-cause alerts, and a prioritised playbook. Your team executes. The loop refines. The brand gets smarter every cycle.",
      ctaLabel: "Request Demo",
    },
    {
      url: "/solutions/d2c-brands/",
      label: "For D2C Brands",
      stage: "mofu",
      audience: "D2C founders / CMOs",
      cta: "Request Demo",
      purpose:
        "D2C industry page — full-stack intelligence for direct-to-consumer brands",
      headline:
        "D2C brands that win in AI-era markets don't rely on a single channel. They see all of them — and act on one root cause.",
      sub: "AI visibility, review velocity, marketplace ranking, and organic reach — unified into one Market Momentum Score. Built for D2C.",
      ctaLabel: "Request Demo",
    },
  ],
  Conversion: [
    {
      url: "/request-demo/",
      label: "Request Demo",
      stage: "bofu",
      audience: "All buyers",
      cta: "Book My Demo",
      purpose:
        "Primary BOFU conversion — demo booking page with trust signals",
      headline: "See your brand's Market Momentum Score. Live. In 30 minutes.",
      sub: "No slides. No feature tour. We pull your brand's AI Share of Search, Reputation Signal, and Reach Velocity — and show you exactly where the gap is.",
      ctaLabel: "Book My Demo",
    },
    {
      url: "/pricing/",
      label: "Pricing",
      stage: "bofu",
      audience: "Evaluating buyers",
      cta: "Start Free Trial",
      purpose: "Pricing tiers with conversion focus",
      headline:
        "Intelligence that pays for itself in the first root-cause alert.",
      sub: "The average BIU customer identifies a revenue-impacting gap in the first 14 days. The platform then builds the playbook to close it.",
      ctaLabel: "Start Free Trial",
    },
    {
      url: "/compare/biu-vs-semrush/",
      label: "BIU vs. Semrush",
      stage: "bofu",
      audience: "SEO-led evaluators",
      cta: "Request Demo",
      purpose:
        "BOFU comparison page — converts evaluators choosing between tools",
      headline:
        "Semrush tells you where you rank on Google. BIU tells you where you're missing from ChatGPT.",
      sub: "Traditional keyword tools have a blind spot: AI-generated answers. BIU measures the visibility layer that Semrush doesn't see — and the gap is growing every week.",
      ctaLabel: "See the Full Comparison",
    },
  ],
  Content: [
    {
      url: "/glossary/ai-share-of-search/",
      label: "Glossary: AI Share of Search",
      stage: "tofu",
      audience: "AI engines + SEO",
      cta: "—",
      purpose: "Entity definition page — structured for AI engine citation",
      headline: "AI Share of Search: the definitive definition.",
      sub: "The percentage of AI-generated answers in a category in which a brand appears. Measured across ChatGPT, Perplexity, and Google AI Overviews. Originated by Boast It UP (BIU).",
      ctaLabel: "Track Your Score with BIU",
    },
    {
      url: "/blog/ai-search/what-is-ai-share-of-search/",
      label: "Blog: What is AI Share of Search",
      stage: "tofu",
      audience: "Organic search",
      cta: "See Platform",
      purpose:
        "Top-of-cluster blog post — drives informational traffic, links to pillar",
      headline:
        "What is AI Share of Search? (And why your current stack doesn't measure it)",
      sub: "Search changed. The brands that appear in AI-generated answers capture trust that no keyword ranking can replicate. Here's what AI Share of Search measures — and why it's the metric that matters now.",
      ctaLabel: "See How BIU Measures It",
    },
    {
      url: "/academy/ai-search/aeo-fundamentals/",
      label: "Academy: AEO Fundamentals",
      stage: "tofu",
      audience: "SEO practitioners",
      cta: "Free Audit",
      purpose:
        "Academy course — builds expertise, ends with CTA to free audit",
      headline:
        "Answer Engine Optimisation: the discipline that matters more than keyword SEO.",
      sub: "AEO is the practice of making your brand the answer AI engines retrieve. Not just appearing in search results — being cited as the source.",
      ctaLabel: "Audit My AI Presence",
    },
    {
      url: "/resources/benchmarks/ai-share-of-search-industry-benchmarks/",
      label: "Benchmark: AI Share of Search",
      stage: "tofu",
      audience: "All + AI engines",
      cta: "Download",
      purpose:
        "Primary data asset — cited by AI engines, drives downloads and email capture",
      headline:
        "Industry benchmarks: what's a strong AI Share of Search score in your category?",
      sub: "BIU analysed 50,000 AI-generated answers across 8 categories. The median brand AI Share of Search is 12%. Category leaders average 61%.",
      ctaLabel: "Download the Full Benchmark Report",
    },
  ],
};

export interface JourneyStep {
  type: string;
  url: string;
  desc: string;
}

export interface Journey {
  id: string;
  label: string;
  steps: JourneyStep[];
}

export const journeys: Journey[] = [
  {
    id: "organic",
    label: "Organic Search Visitor",
    steps: [
      {
        type: "Entry",
        url: "/blog/ai-search/what-is-ai-share-of-search/",
        desc: "Lands via Google — informational query",
      },
      {
        type: "Pillar",
        url: "/ai-share-of-search/",
        desc: "Deepens understanding — BIU is the source",
      },
      {
        type: "Lead Capture",
        url: "/free-audit/",
        desc: "Runs free AI visibility audit",
      },
      {
        type: "Nurture",
        url: "Email sequence",
        desc: "Category benchmark + gap playbook",
      },
      { type: "Conversion", url: "/request-demo/", desc: "Books demo — BOFU" },
    ],
  },
  {
    id: "ai",
    label: "AI Search Visitor",
    steps: [
      {
        type: "Entry via AI",
        url: "/glossary/ai-share-of-search/",
        desc: "ChatGPT / Perplexity cites BIU as the source",
      },
      {
        type: "Trust Built",
        url: "/ai-share-of-search/",
        desc: "Direct answer consumed — credibility established",
      },
      {
        type: "Lead Capture",
        url: "/free-audit/",
        desc: '"See your brand\'s score" — low-friction CTA',
      },
      {
        type: "Conversion",
        url: "/request-demo/",
        desc: "BOFU — highest-intent lead type",
      },
    ],
  },
  {
    id: "aware",
    label: "Product-Aware Visitor",
    steps: [
      {
        type: "Entry",
        url: "/products/competitive-intelligence/",
        desc: "Already knows BIU — evaluating",
      },
      {
        type: "Comparison",
        url: "/compare/biu-vs-semrush/",
        desc: "Reviews competitive differentiation",
      },
      {
        type: "Social Proof",
        url: "/customers/",
        desc: "Case studies by vertical",
      },
      {
        type: "Conversion",
        url: "/request-demo/ or /start-free-trial/",
        desc: "High-intent — short funnel",
      },
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise Buyer",
    steps: [
      {
        type: "Entry",
        url: "/solutions/for-brand-teams/",
        desc: "Role-specific solution page",
      },
      {
        type: "Evidence",
        url: "/customers/",
        desc: "Case studies in their vertical",
      },
      {
        type: "Diligence",
        url: "/security/ + /about/",
        desc: "Trust and compliance review",
      },
      {
        type: "Conversion",
        url: "/request-demo/",
        desc: "Enterprise demo flow",
      },
    ],
  },
];

export interface Phase {
  num: string;
  title: string;
  period: string;
  goal: string;
  count: string;
  pct: number;
  pages: string[];
}

export const phases: Phase[] = [
  {
    num: "01",
    title: "Launch",
    period: "Month 1–2",
    goal: "Establish the category, build the conversion funnel, publish minimum viable content moat.",
    count: "~30",
    pct: 10,
    pages: [
      "Homepage",
      "Competitive Intelligence hub",
      "AI Share of Search feature",
      "AI SoS pillar",
      "Request Demo",
      "Free Audit",
      "Pricing",
      "About",
      "3 core glossary terms",
      "3 blog posts",
      "FAQ: AI Share of Search",
    ],
  },
  {
    num: "02",
    title: "Authority Building",
    period: "Month 3–6",
    goal: "Build topical authority across all 5 clusters. Capture informational search traffic. Begin AI engine citation.",
    count: "~121",
    pct: 40,
    pages: [
      "All 16 feature pages",
      "12 solution pages",
      "20 blog posts",
      "30+ glossary terms",
      "AI SoV pillar",
      "12 use case pages",
      "3 competitor comparison pages",
      "AI Search Academy (7 lessons)",
      "Research statistics page",
    ],
  },
  {
    num: "03",
    title: "Category Leadership",
    period: "Month 7–12",
    goal: "Become the definitive knowledge source for AI Growth Intelligence. Dominate AI engine citations. Build research reputation.",
    count: "~135",
    pct: 75,
    pages: [
      "Full intelligence academy (4 modules)",
      "7+ competitor comparisons",
      "6 industry verticals",
      "40+ blog posts",
      "Quarterly benchmark program",
      "Market Momentum Score explainer",
      "5+ case studies",
      "BIU AI Visibility Index (monthly)",
    ],
  },
  {
    num: "04",
    title: "Market Dominance",
    period: "Month 13–24",
    goal: "Cement category leadership. Expand verticals. Create compounding research moat.",
    count: "300+",
    pct: 100,
    pages: [
      "International / regional editions",
      "Vertical expansion (F&B, fashion, fintech)",
      "Certification: AI Growth Intelligence Certified",
      "Community / forum section",
      "Research consortium studies",
      "BIU Market Momentum Leaderboard (public)",
    ],
  },
];

/** Heading segment — accent words get bold italic-serif treatment */
export type HeadlineSegment = { text: string; accent?: boolean };

// ── HERO ──────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: "AI Growth Intelligence Platform",
  // h1 broken into segments so "ChatGPT" can be highlighted in brand green
  h1: [
    { text: "You rank #1 on Google. You don't appear once in " },
    { text: "ChatGPT", accent: true },
    { text: "." },
  ],
  ctaPrimary: "Get Your Free AI Visibility Audit",
  ctaSecondary: "See How It Works",
  stats: [
    { value: "0%", label: "median AI SoS for new brands" },
    { value: "61%", label: "average for category leaders" },
    { value: "14 days", label: "to first root-cause alert" },
  ],
};

export type SignalState = "up" | "down" | "warn";

export interface SignalRow {
  label: string;
  value: string;
  state: SignalState;
}

export const signalCard = {
  title: "BIU Copilot · Analysing distribution data",
  // Demo microcopy — the question the user "asks" in the looping showcase
  userPrompt: "How is my brand showing up across AI search?",
  status: "Online",
  rows: [
    { label: "AI Share of Search", value: "12% ↓ from 30%", state: "down" },
    { label: "AI Share of Voice", value: "0% vs ON Whey 78%", state: "warn" },
    { label: "Reputation Signal", value: "58 / 100", state: "warn" },
    { label: "Reach Velocity", value: "71 ↓ from 76", state: "down" },
    { label: "Market Momentum Score", value: "44 / 100", state: "down" },
  ] as SignalRow[],
  copilotLabel: "BIU Copilot",
  // Insight rendered with bold spans; preserved verbatim.
  insight: [
    { text: "It's not 3 problems — it's one.", bold: true },
    {
      text: " Reels posting dropped 60% in May (5 → 2/week). That single change is now showing up across your AI visibility, hashtag reach, and review velocity simultaneously. Restoring cadence = ",
    },
    { text: "+12pts MMS in 30 days", bold: true },
    { text: "." },
  ],
};

export const statsBar = [
  { num: "4", label: "Intelligence modules in one platform" },
  { num: "300+", label: "Pages of authoritative content planned" },
  {
    num: "3",
    label: "AI engines tracked: ChatGPT · Perplexity · Gemini",
  },
  { num: "24h", label: "To first category-level insight" },
];

// Section headers (verbatim from source)
export const sectionCopy = {
  modules: {
    label: "The Intelligence Platform",
    h2: [
      { text: "Four modules. One " },
      { text: "Market Momentum Score", accent: true },
      { text: "." },
    ] satisfies HeadlineSegment[],
    sub: "BIU doesn't surface data. It identifies the root cause across all four intelligence layers — and hands you the single lever to pull.",
  },
  sitemap: {
    label: "Site Architecture",
    h2: "Every page has a job. Explore the sitemap.",
    sub: "Click any page to see its purpose, target audience, funnel stage, and the exact UX copy that belongs on it — written to BIU brand voice.",
  },
  phases: {
    label: "Content Roadmap",
    h2: [
      { text: "From 30 pages to " },
      { text: "category dominance", accent: true },
      { text: "." },
    ] satisfies HeadlineSegment[],
    sub: "Four phases. Each one builds on the last. Click a phase to see the priority pages.",
  },
  journey: {
    label: "Conversion Architecture",
    h2: "Every visitor has a path. Every path has a close.",
    sub: "Five distinct conversion journeys — each mapped to where the visitor is coming from and what they already know.",
  },
  cases: {
    label: "Resources · Case Studies",
    h2: [
      { text: "Real brands. Named root causes. " },
      { text: "Measured gains", accent: true },
      { text: "." },
    ] satisfies HeadlineSegment[],
    sub: "Placeholder case studies — replaced with real customer stories as they are published.",
  },
};

// ── CLOSING CTA (reuses hero copy per decision) ─────────────────────────────
export const closingCta = {
  headline: "Your competitors are already in the AI answers. Close the gap.",
  cta: "Get Your Free AI Visibility Audit",
};

// ── NAV MEGA-MENUS ──────────────────────────────────────────────────────────
export interface MegaItem {
  label: string;
  desc?: string;
  badge?: string;
}

export interface MegaColumn {
  title: string;
  items: MegaItem[];
}

export interface NavItem {
  label: string;
  columns: MegaColumn[];
}

export const navItems: NavItem[] = [
  {
    label: "Product",
    columns: [
      {
        title: "Intelligence Modules",
        items: [
          {
            label: "Competitive Intelligence",
            desc: "See where competitors appear in AI answers.",
            badge: "Ships first",
          },
          {
            label: "Reputation Intelligence",
            desc: "The gap between being found and being chosen.",
            badge: "Coming soon",
          },
          {
            label: "Ecommerce Intelligence",
            desc: "Every ranking gap is a revenue gap.",
            badge: "Coming soon",
          },
          {
            label: "Voice Intelligence",
            desc: "Are you winning organic reach or buying it?",
            badge: "Coming soon",
          },
          {
            label: "BIU Copilot",
            desc: "Runs the analysis. Names the one move.",
          },
        ],
      },
      {
        title: "By job",
        items: [
          {
            label: "AI Visibility",
            desc: "Appear in ChatGPT, Perplexity, AI Overviews.",
          },
          {
            label: "Competitive Monitoring",
            desc: "Know the day your competitor moves.",
          },
          {
            label: "For Brand Teams",
            desc: "A briefing with the answer, not just charts.",
          },
          {
            label: "For D2C Brands",
            desc: "Every channel, one Market Momentum Score.",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        title: "Learn",
        items: [
          { label: "Case Studies", desc: "Placeholder — real studies coming soon." },
          { label: "Research Reports", desc: "Original AI-search research." },
          { label: "Benchmarks", desc: "What's a strong AI Share of Search?" },
        ],
      },
      {
        title: "Library",
        items: [
          { label: "AI Search Academy", desc: "AEO fundamentals and beyond." },
          { label: "Blog", desc: "What is AI Share of Search, and more." },
          { label: "Glossary", desc: "Entity definitions AI engines cite." },
        ],
      },
    ],
  },
  {
    label: "About us",
    columns: [
      {
        title: "Company",
        items: [
          {
            label: "What is AI Growth Intelligence",
            desc: "The new discipline you're already late to.",
          },
          { label: "Company", desc: "Built for AI-era markets." },
          { label: "Careers", desc: "Join the team defining the category." },
        ],
      },
      {
        title: "Connect",
        items: [
          { label: "Press", desc: "News and media." },
          { label: "Partners", desc: "Agencies and integrations." },
          { label: "Contact", desc: "Talk to the team." },
        ],
      },
    ],
  },
];

// ── CASE STUDIES (placeholder content until real studies supplied) ──────────
export interface CaseStudy {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const caseStudies: CaseStudy[] = [
  {
    quote:
      "Placeholder — real customer case study coming soon. BIU named the single root cause behind our multi-channel drop in the first 14 days.",
    name: "Case study placeholder",
    role: "D2C Brand · Category leader",
    initials: "D2",
  },
  {
    quote:
      "Placeholder — real customer case study coming soon. We went from invisible in AI answers to cited as the source in under six weeks.",
    name: "Case study placeholder",
    role: "Brand team · CPG",
    initials: "CP",
  },
  {
    quote:
      "Placeholder — real customer case study coming soon. The Market Momentum Score gave our 9am briefing the answer, not another chart.",
    name: "Case study placeholder",
    role: "Growth lead · Marketplace",
    initials: "MP",
  },
];

// ── FOOTER (trimmed taxonomy + social / contact) ────────────────────────────
export const footer = {
  tagline:
    "The AI Growth Intelligence Platform. Built for brands that compete in AI-era markets.",
  email: "hello@boastitup.com",
  columns: [
    {
      title: "Product",
      links: ["Competitive Intelligence", "BIU Copilot", "Pricing"],
    },
    {
      title: "Solutions",
      links: ["AI Visibility", "For Brand Teams", "For D2C Brands"],
    },
    {
      title: "Resources",
      links: ["AI Search Academy", "Benchmarks", "Blog"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact"],
    },
  ],
  social: [
    { label: "X", href: "#", icon: "x" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
  legalLeft: "© 2026 Boast It UP · boastitup.com",
  legalRight: "Privacy · Terms · Security",
};
