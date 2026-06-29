import { useReducedMotion } from "framer-motion";

const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4";

export function HeroVideoBackground() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-color-bg via-color-bg/92 to-color-bg/70 md:bg-gradient-to-r md:from-color-bg md:via-color-bg/90 md:to-color-bg/55" />
      <div className="absolute inset-0 bg-color-bg/30 md:bg-color-bg/20" />
    </div>
  );
}
