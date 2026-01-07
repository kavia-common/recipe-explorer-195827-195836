import { mockRecipes } from "../mock/recipes";

function normalizeBaseUrl(url) {
  if (!url) return "";
  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function getApiBase() {
  return normalizeBaseUrl(process.env.REACT_APP_API_BASE || process.env.REACT_APP_BACKEND_URL || "");
}

function hasApiBase() {
  return Boolean(getApiBase());
}

async function requestJson(path) {
  const base = getApiBase();
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`API request failed (${res.status}): ${text || res.statusText}`);
  }

  return res.json();
}

// PUBLIC_INTERFACE
export async function fetchRecipes() {
  /**
   * Fetch all recipes from backend (if configured), otherwise return mock data.
   *
   * Expected API shape if present:
   * - GET /recipes -> Recipe[]
   */
  if (!hasApiBase()) return mockRecipes;

  // Keep this tolerant: if backend uses different route, callers can update.
  return requestJson("/recipes");
}

// PUBLIC_INTERFACE
export async function fetchRecipeById(id) {
  /**
   * Fetch a single recipe by id (if configured), otherwise read from mock data.
   *
   * Expected API shape if present:
   * - GET /recipes/:id -> Recipe
   */
  if (!hasApiBase()) {
    const found = mockRecipes.find((r) => r.id === id);
    if (!found) throw new Error("Recipe not found");
    return found;
  }

  return requestJson(`/recipes/${encodeURIComponent(id)}`);
}
