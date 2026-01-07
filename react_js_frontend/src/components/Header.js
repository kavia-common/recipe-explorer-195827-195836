import React from "react";
import { isFlagEnabled } from "../utils/featureFlags";

// PUBLIC_INTERFACE
export default function Header({ query, onQueryChange }) {
  /** Top header with brand and search. */
  const showExperiments = isFlagEnabled("experiments");

  return (
    <header className="TopBar">
      <div className="TopBarInner">
        <div className="Brand" aria-label="Recipe Explorer">
          <div className="BrandMark" aria-hidden="true" />
          <div className="BrandText">
            <div className="BrandTitle">Recipe Explorer</div>
            <div className="BrandSub">Browse, search, and cook with confidence</div>
          </div>
        </div>

        <label className="SearchBar" aria-label="Search recipes">
          <svg
            className="SearchIcon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16.5 16.5 21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            className="SearchInput"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search recipes, ingredients, tags…"
            type="search"
            autoComplete="off"
          />
          <span className="visually-hidden">Search</span>
        </label>

        <div className="TopBarActions">
          {showExperiments ? <span className="Badge">Experiments</span> : null}
        </div>
      </div>
    </header>
  );
}
