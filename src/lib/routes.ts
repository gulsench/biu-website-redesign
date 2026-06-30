import type { ModuleId } from "@/lib/modules";

export const MODULES_PATH = "/modules";

export function moduleHref(moduleId?: ModuleId) {
  return moduleId ? `${MODULES_PATH}#${moduleId}` : MODULES_PATH;
}

export const moduleIdByLabel: Record<string, ModuleId> = {
  AEO: "aeo",
  "Social Media": "social",
  Competition: "competition",
  Reputation: "reputation",
};
