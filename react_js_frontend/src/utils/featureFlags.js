/**
 * Feature flag helpers.
 *
 * Flags are sourced from:
 * - REACT_APP_FEATURE_FLAGS: comma-separated list (e.g., "experiments,foo")
 * - REACT_APP_EXPERIMENTS_ENABLED: boolean-like string
 */

const truthy = new Set(["1", "true", "yes", "on", "enabled"]);

// PUBLIC_INTERFACE
export function parseFeatureFlags(flagsString) {
  /**
   * Parse comma-separated feature flag strings into a Set.
   */
  const raw = (flagsString || "").trim();
  if (!raw) return new Set();
  return new Set(
    raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  );
}

// PUBLIC_INTERFACE
export function isFlagEnabled(flagName) {
  /**
   * Returns true if a given feature flag is enabled via env vars.
   */
  const flags = parseFeatureFlags(process.env.REACT_APP_FEATURE_FLAGS);
  if (flags.has(flagName)) return true;

  if (flagName === "experiments") {
    const v = (process.env.REACT_APP_EXPERIMENTS_ENABLED || "").toLowerCase().trim();
    if (truthy.has(v)) return true;
  }

  return false;
}
