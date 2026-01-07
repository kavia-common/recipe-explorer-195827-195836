import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe, onOpen }) {
  /** Renders one recipe card. */
  const imgAlt = recipe?.title ? `${recipe.title} recipe image` : "Recipe image";

  return (
    <article className="Card">
      <div className="CardMedia">
        {recipe?.imageUrl ? <img src={recipe.imageUrl} alt={imgAlt} /> : null}
      </div>

      <div className="CardBody">
        <h3 className="CardTitle">{recipe?.title}</h3>
        <p className="CardDesc">{recipe?.description}</p>

        <div className="CardMetaRow" aria-label="Recipe metadata">
          {recipe?.category ? <span className="Tag">{recipe.category}</span> : null}
          {recipe?.timeMinutes ? <span className="Tag TagAmber">{recipe.timeMinutes} min</span> : null}
          {recipe?.diet ? <span className="Tag">{recipe.diet}</span> : null}
        </div>
      </div>

      <div className="CardActions">
        <button className="LinkButton" type="button" onClick={() => onOpen(recipe)}>
          Quick view
        </button>
        <Link className="LinkButton" to={`/recipes/${encodeURIComponent(recipe.id)}`}>
          Details
        </Link>
      </div>
    </article>
  );
}
