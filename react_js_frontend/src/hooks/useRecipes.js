import { useEffect, useMemo, useState } from "react";
import { fetchRecipes } from "../services/apiClient";

// PUBLIC_INTERFACE
export function useRecipes() {
  /**
   * Fetch recipes and expose loading/error state and useful derived filter lists.
   */
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function run() {
      try {
        setStatus("loading");
        setError(null);
        const data = await fetchRecipes();
        if (!mounted) return;
        setRecipes(Array.isArray(data) ? data : []);
        setStatus("success");
      } catch (e) {
        if (!mounted) return;
        setError(e instanceof Error ? e : new Error("Failed to load recipes"));
        setStatus("error");
      }
    }

    run();

    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set(["All"]);
    recipes.forEach((r) => r.category && set.add(r.category));
    return Array.from(set);
  }, [recipes]);

  const cuisines = useMemo(() => {
    const set = new Set(["All"]);
    recipes.forEach((r) => r.cuisine && set.add(r.cuisine));
    return Array.from(set);
  }, [recipes]);

  const diets = useMemo(() => {
    const set = new Set(["All"]);
    recipes.forEach((r) => r.diet && set.add(r.diet));
    return Array.from(set);
  }, [recipes]);

  return { recipes, status, error, categories, cuisines, diets };
}
