import { useCallback, useEffect, useState } from "react";
import { applyTheme, getStoredTheme, resolveTheme, setTheme, type Theme } from "@/lib/theme";

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => resolveTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getStoredTheme()) return;
      const next = media.matches ? "dark" : "light";
      setThemeState(next);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const updateTheme = useCallback((next: Theme) => {
    setTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    updateTheme(theme === "dark" ? "light" : "dark");
  }, [theme, updateTheme]);

  return { theme, setTheme: updateTheme, toggleTheme };
}
