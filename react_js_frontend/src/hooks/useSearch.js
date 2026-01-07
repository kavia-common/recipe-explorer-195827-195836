import { useMemo } from "react";

function normalize(s) {
  return (s || "").toLowerCase().trim();
}

function includesAny(haystack, needles) {
  const h = normalize(haystack);
  return needles.some((n) => h.includes(normalize(n)));
}

// PUBLIC_INTERFACE
export function useSearch(recipes, query, filters) {
  /**
   * Returns filtered recipes based on query and selected filters.
   */
  return useMemo(() => {
    const q = normalize(query);
    const { category, cuisine, diet } = filters || {};

    return (recipes || []).filter((r) => {
      if (category && category !== "All" && r.category !== category) return false;
      if (cuisine && cuisine !== "All" && r.cuisine !== cuisine) return false;
      if (diet && diet !== "All" && r.diet !== diet) return false;

      if (!q) return true;

      const fields = [
        r.title,
        r.description,
        r.category,
        r.cuisine,
        r.diet,
        ...(r.tags || []),
        ...(r.ingredients || [])
      ];

      return includesAny(fields.join(" "), [q]);
    });
  }, [recipes, query, filters]);
}
