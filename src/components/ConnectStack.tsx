import { Reveal } from "@/components/Reveal";
import { LogoTicker, type LogoTickerItem } from "@/components/LogoTicker";

const stackIntegrations: LogoTickerItem[] = [
  { type: "image", name: "Shopify", slug: "shopify" },
  { type: "image", name: "Amazon", slug: "amazon" },
  { type: "image", name: "Google", slug: "google" },
  { type: "image", name: "Meta", slug: "meta" },
  { type: "image", name: "Instagram", slug: "instagram" },
  { type: "image", name: "YouTube", slug: "youtube" },
  { type: "image", name: "TikTok", slug: "tiktok" },
  { type: "image", name: "Semrush", slug: "semrush" },
  { type: "image", name: "HubSpot", slug: "hubspot" },
  { type: "image", name: "Slack", slug: "slack" },
  { type: "image", name: "Trustpilot", slug: "trustpilot" },
  { type: "text", label: "Klaviyo" },
];

export function ConnectStack() {
  return (
    <section
      id="integrations"
      className="section-light w-full overflow-x-clip border-t border-color-border py-12 sm:py-16 md:py-24"
    >
      <div className="section-container">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="eyebrow mb-4">Integrations</p>
          <h2 className="font-heading text-[clamp(1.75rem,5vw,3rem)] font-medium text-color-text md:text-5xl">
            Plugs into the stack you{" "}
            <span className="text-blue">already run.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-color-text-muted sm:text-base md:text-lg">
            Connect your channels in minutes. BIU reads from where your brand
            already lives — no rip-and-replace, no new workflow to learn.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.06} className="mt-2 w-full">
        <LogoTicker items={stackIntegrations} />
      </Reveal>
    </section>
  );
}
