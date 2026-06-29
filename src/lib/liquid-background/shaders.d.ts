declare module "@/lib/liquid-background/shader_mount.js" {
  export class ShaderMount {
    constructor(
      canvas: HTMLCanvasElement,
      fragmentShader: string,
      uniforms?: Record<string, number | number[] | boolean>,
      webGlContextAttributes?: WebGLContextAttributes,
      speed?: number,
      seed?: number,
    );
    setUniforms(uniforms: Record<string, number | number[] | boolean>): void;
    setSpeed(speed?: number): void;
    setSeed(seed: number): void;
    dispose(): void;
  }
}

declare module "@/lib/liquid-background/warp.js" {
  export const PatternShapes: {
    Checks: number;
    Stripes: number;
    Edge: number;
  };
  export const warpFragmentShader: string;
}

declare module "@/lib/liquid-background/get_shader_color_from_string.js" {
  export function getShaderColorFromString(
    colorString: string | number[],
    fallback?: number[],
  ): number[];
}
