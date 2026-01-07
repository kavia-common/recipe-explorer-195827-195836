import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RecipeDetail from "../components/RecipeDetail";
import { fetchRecipeById } from "../services/apiClient";

// PUBLIC_INTERFACE
export default function RecipeDetailPage() {
  /** Dedicated page for a single recipe. */
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      try {
        setStatus("loading");
        setError(null);
        const r = await fetchRecipeById(id);
        if (!mounted) return;
        setRecipe(r);
        setStatus("success");
      } catch (e) {
        if (!mounted) return;
        setError(e instanceof Error ? e : new Error("Failed to load recipe"));
        setStatus("error");
      }
    }
    run();
    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <div className="AppShell">
      <header className="TopBar">
        <div className="TopBarInner">
          <div className="Brand" aria-label="Recipe Explorer">
            <div className="BrandMark" aria-hidden="true" />
            <div className="BrandText">
              <div className="BrandTitle">Recipe Explorer</div>
              <div className="BrandSub">Recipe details</div>
            </div>
          </div>

          <div className="TopBarActions">
            <Link className="Button ButtonPrimary" to="/">
              ← Back to search
            </Link>
          </div>
        </div>
      </header>

      <main className="Main" style={{ gridTemplateColumns: "1fr" }}>
        <div className="Content">
          {status === "error" ? (
            <div className="ErrorState" role="alert">
              <strong>Could not load recipe.</strong>
              <div style={{ marginTop: 6 }}>{error?.message || "Unknown error"}</div>
              <div style={{ marginTop: 10 }}>
                <Link className="Button ButtonPrimary" to="/">
                  Go back
                </Link>
              </div>
            </div>
          ) : status === "loading" ? (
            <div className="EmptyState" role="status" aria-live="polite">
              Loading recipe…
            </div>
          ) : (
            <>
              <h1 className="ContentTitle" style={{ marginBottom: 10 }}>
                {recipe?.title}
              </h1>
              <RecipeDetail recipe={recipe} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
