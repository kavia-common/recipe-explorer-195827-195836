import React, { useMemo, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RecipeList from "../components/RecipeList";
import Modal from "../components/Modal";
import RecipeDetail from "../components/RecipeDetail";
import { useRecipes } from "../hooks/useRecipes";
import { useSearch } from "../hooks/useSearch";

// PUBLIC_INTERFACE
export default function RecipeListPage() {
  /** Main list/search page. */
  const { recipes, status, error, categories, cuisines, diets } = useRecipes();
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ category: "All", cuisine: "All", diet: "All" });
  const [selected, setSelected] = useState(null);

  const filtered = useSearch(recipes, query, filters);

  const metaText = useMemo(() => {
    const total = recipes?.length || 0;
    const shown = filtered?.length || 0;
    if (status === "loading") return "Loading recipes…";
    if (total === shown) return `${total} recipes`;
    return `${shown} of ${total} recipes`;
  }, [recipes, filtered, status]);

  return (
    <div className="AppShell">
      <Header query={query} onQueryChange={setQuery} />

      <main className="Main">
        <Sidebar
          categories={categories}
          cuisines={cuisines}
          diets={diets}
          filters={filters}
          onFiltersChange={setFilters}
          onReset={() => setFilters({ category: "All", cuisine: "All", diet: "All" })}
        />

        <div className="Content">
          <div className="ContentHeader">
            <h1 className="ContentTitle">Discover recipes</h1>
            <div className="ContentMeta">{metaText}</div>
          </div>

          <RecipeList
            recipes={filtered}
            status={status}
            error={error}
            onOpen={(r) => setSelected(r)}
          />
        </div>
      </main>

      {selected ? (
        <Modal title={selected.title} onClose={() => setSelected(null)}>
          <RecipeDetail recipe={selected} />
        </Modal>
      ) : null}
    </div>
  );
}
