import React from "react";

// PUBLIC_INTERFACE
export default function RecipeDetail({ recipe }) {
  /** Recipe detail view content. */
  if (!recipe) return null;

  const imgAlt = recipe?.title ? `${recipe.title} recipe image` : "Recipe image";

  return (
    <div className="Detail" aria-label="Recipe detail">
      <div>
        <div className="DetailMedia">
          {recipe?.imageUrl ? <img src={recipe.imageUrl} alt={imgAlt} /> : null}
        </div>

        <div className="DetailMeta" aria-label="Recipe metadata">
          {recipe?.cuisine ? <span className="Tag">{recipe.cuisine}</span> : null}
          {recipe?.diet ? <span className="Tag">{recipe.diet}</span> : null}
          {recipe?.difficulty ? <span className="Tag">{recipe.difficulty}</span> : null}
          {recipe?.servings ? <span className="Tag TagAmber">{recipe.servings} servings</span> : null}
          {recipe?.timeMinutes ? <span className="Tag TagAmber">{recipe.timeMinutes} min</span> : null}
        </div>

        {recipe?.description ? (
          <p style={{ color: "rgba(17,24,39,0.72)", marginTop: 10, lineHeight: 1.5 }}>
            {recipe.description}
          </p>
        ) : null}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <section className="Panel" aria-label="Ingredients">
          <h3 className="PanelTitle">Ingredients</h3>
          <ul className="List">
            {(recipe.ingredients || []).map((i, idx) => (
              <li key={`${idx}-${i}`}>{i}</li>
            ))}
          </ul>
        </section>

        <section className="Panel" aria-label="Steps">
          <h3 className="PanelTitle">Steps</h3>
          <ol className="Steps">
            {(recipe.steps || []).map((s, idx) => (
              <li key={`${idx}-${s}`}>{s}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
