import React from "react";
import RecipeCard from "./RecipeCard";

// PUBLIC_INTERFACE
export default function RecipeList({ recipes, status, error, onOpen }) {
  /** Renders list/grid of recipe cards. */
  if (status === "error") {
    return (
      <div className="ErrorState" role="alert">
        <strong>Could not load recipes.</strong>
        <div style={{ marginTop: 6 }}>
          {error?.message || "Unknown error"}
        </div>
      </div>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <div className="EmptyState" role="status" aria-live="polite">
        <strong>No recipes found.</strong>
        <div style={{ marginTop: 6, color: "rgba(17,24,39,0.65)" }}>
          Try a different search or clear some filters.
        </div>
      </div>
    );
  }

  return (
    <section className="Grid" aria-label="Recipe results">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} onOpen={onOpen} />
      ))}
    </section>
  );
}
