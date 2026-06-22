import { announcement } from "@/lib/content";

export function AnnouncementBar() {
  return (
    <div className="bg-band text-white">
      <a
        href="#platform"
        className="mx-auto flex max-w-container items-center justify-center gap-2 px-6 py-2.5 text-center text-[12.5px] font-medium text-[rgba(255,255,255,0.85)] transition-colors hover:text-white"
      >
        {announcement}
        <span aria-hidden className="text-brand-400">
          →
        </span>
      </a>
    </div>
  );
}
