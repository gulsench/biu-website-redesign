import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { cubicBezier, useInView } from "framer-motion";
import { ShaderMount as ShaderMountVanilla } from "@/lib/liquid-background/shader_mount.js";
import { getShaderColorFromString } from "@/lib/liquid-background/get_shader_color_from_string.js";
import {
  warpFragmentShader,
  PatternShapes,
} from "@/lib/liquid-background/warp.js";
import { cn } from "@/lib/utils";

const speedEase = cubicBezier(0.65, 0, 0.88, 0.77);

type PresetName = "Prism" | "Lava" | "Plasma" | "Pulse" | "Vortex" | "Mist" | "BIU";

interface TemplateValues {
  color1: string;
  color2: string;
  color3: string;
  rotation: number;
  proportion: number;
  scale: number;
  speed: number;
  distortion: number;
  swirl: number;
  swirlIterations: number;
  softness: number;
  offset: number;
  shape: keyof typeof PatternShapes;
  shapeSize: number;
}

const templates: Record<Exclude<PresetName, "BIU">, TemplateValues> = {
  Prism: {
    color1: "#050505",
    color2: "#66B3FF",
    color3: "#FFFFFF",
    rotation: -50,
    proportion: 1,
    scale: 0.01,
    speed: 30,
    distortion: 0,
    swirl: 50,
    swirlIterations: 16,
    softness: 47,
    offset: -299,
    shape: "Checks",
    shapeSize: 45,
  },
  Lava: {
    color1: "#FF9F21",
    color2: "#FF0303",
    color3: "#000000",
    rotation: 114,
    proportion: 100,
    scale: 0.52,
    speed: 30,
    distortion: 7,
    swirl: 18,
    swirlIterations: 20,
    softness: 100,
    offset: 717,
    shape: "Edge",
    shapeSize: 12,
  },
  Plasma: {
    color1: "#B566FF",
    color2: "#000000",
    color3: "#000000",
    rotation: 0,
    proportion: 63,
    scale: 0.75,
    speed: 30,
    distortion: 5,
    swirl: 61,
    swirlIterations: 5,
    softness: 100,
    offset: -168,
    shape: "Checks",
    shapeSize: 28,
  },
  Pulse: {
    color1: "#66FF85",
    color2: "#000000",
    color3: "#000000",
    rotation: -167,
    proportion: 92,
    scale: 0,
    speed: 20,
    distortion: 54,
    swirl: 75,
    swirlIterations: 3,
    softness: 28,
    offset: -813,
    shape: "Checks",
    shapeSize: 79,
  },
  Vortex: {
    color1: "#000000",
    color2: "#FFFFFF",
    color3: "#000000",
    rotation: 50,
    proportion: 41,
    scale: 0.4,
    speed: 20,
    distortion: 0,
    swirl: 100,
    swirlIterations: 3,
    softness: 5,
    offset: -744,
    shape: "Stripes",
    shapeSize: 80,
  },
  Mist: {
    color1: "#050505",
    color2: "#FF66B8",
    color3: "#050505",
    rotation: 0,
    proportion: 33,
    scale: 0.48,
    speed: 39,
    distortion: 4,
    swirl: 65,
    swirlIterations: 5,
    softness: 100,
    offset: -235,
    shape: "Edge",
    shapeSize: 48,
  },
};

const biuTemplate: TemplateValues = {
  color1: "#ffffff",
  color2: "#1aa049",
  color3: "#f5f5f5",
  rotation: -42,
  proportion: 58,
  scale: 0.35,
  speed: 22,
  distortion: 3,
  swirl: 48,
  swirlIterations: 8,
  softness: 72,
  offset: -180,
  shape: "Edge",
  shapeSize: 38,
};

const biuDarkTemplate: TemplateValues = {
  ...biuTemplate,
  color1: "#0a0a0a",
  color2: "#1aa049",
  color3: "#181818",
};

export interface AnimatedLiquidBackgroundProps {
  preset?: PresetName;
  speed?: number;
  className?: string;
  style?: CSSProperties;
  noiseOpacity?: number;
}

function WarpShader({
  fragmentShader,
  style,
  uniforms = {},
  speed = 1,
  seed = 0,
}: {
  fragmentShader: string;
  style?: CSSProperties;
  uniforms?: Record<string, number | number[] | boolean>;
  speed?: number;
  seed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shaderMountRef = useRef<ShaderMountVanilla | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    shaderMountRef.current = new ShaderMountVanilla(
      canvasRef.current,
      fragmentShader,
      uniforms,
      undefined,
      speed,
      seed,
    );

    return () => {
      shaderMountRef.current?.dispose();
    };
  }, [canvasRef, fragmentShader]);

  useEffect(() => {
    shaderMountRef.current?.setUniforms(uniforms);
  }, [uniforms]);

  useEffect(() => {
    shaderMountRef.current?.setSpeed(speed);
  }, [speed]);

  useEffect(() => {
    shaderMountRef.current?.setSeed(seed);
  }, [seed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={style}
      aria-hidden
    />
  );
}

/** Animated liquid WebGL background (ported from Framer module). */
export function AnimatedLiquidBackground({
  preset = "BIU",
  speed = 25,
  className,
  style,
  noiseOpacity = 0.18,
}: AnimatedLiquidBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const isDark = useStateDark();

  const values = useMemo(() => {
    if (preset === "BIU") return isDark ? biuDarkTemplate : biuTemplate;
    return templates[preset];
  }, [preset, isDark]);

  const currentSpeed = useMemo(() => {
    if (!isInView) return 0;
    return speedEase(speed / 100) * 5;
  }, [isInView, speed]);

  const uniforms = useMemo(
    () => ({
      u_scale: values.scale,
      u_rotation: (values.rotation * Math.PI) / 180,
      u_color1: getShaderColorFromString(values.color1),
      u_color2: getShaderColorFromString(values.color2),
      u_color3: getShaderColorFromString(values.color3),
      u_proportion: values.proportion / 100,
      u_softness: values.softness / 100,
      u_distortion: values.distortion / 50,
      u_swirl: values.swirl / 100,
      u_swirlIterations: values.swirl === 0 ? 0 : values.swirlIterations,
      u_shapeScale: values.shapeSize / 100,
      u_shape: PatternShapes[values.shape],
    }),
    [values],
  );

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={style}
      aria-hidden
    >
      <WarpShader
        fragmentShader={warpFragmentShader}
        uniforms={uniforms}
        speed={currentSpeed}
        seed={values.offset * 10}
      />
      {noiseOpacity > 0 ? (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
            opacity: noiseOpacity / 2,
          }}
        />
      ) : null}
    </div>
  );
}

function useStateDark() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false,
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}
