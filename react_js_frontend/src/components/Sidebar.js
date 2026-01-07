import React from "react";

// PUBLIC_INTERFACE
export default function Sidebar({
  categories,
  cuisines,
  diets,
  filters,
  onFiltersChange,
  onReset
}) {
  /** Sidebar filters for recipes. */

  function setFilter(key, value) {
    onFiltersChange({ ...filters, [key]: value });
  }

  return (
    <aside className="Sidebar" aria-label="Recipe filters">
      <div className="SidebarTitleRow">
        <div className="SidebarTitle">Filters</div>
        <button className="Button" type="button" onClick={onReset}>
          Reset
        </button>
      </div>

      <div className="SidebarSection">
        <div className="SidebarSectionTitle">Category</div>
        <div className="PillRow" role="list" aria-label="Categories">
          {(categories || []).map((c) => {
            const active = (filters?.category || "All") === c;
            return (
              <button
                key={c}
                className={`Pill ${active ? "PillActive" : ""}`}
                type="button"
                onClick={() => setFilter("category", c)}
                aria-pressed={active}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="SidebarSection">
        <div className="SidebarSectionTitle">Cuisine</div>
        <select
          className="Select"
          value={filters?.cuisine || "All"}
          onChange={(e) => setFilter("cuisine", e.target.value)}
          aria-label="Cuisine"
        >
          {(cuisines || []).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="SidebarSection">
        <div className="SidebarSectionTitle">Diet</div>
        <select
          className="Select"
          value={filters?.diet || "All"}
          onChange={(e) => setFilter("diet", e.target.value)}
          aria-label="Diet"
        >
          {(diets || []).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <div className="HelpText">
          Tip: Use the search bar to match ingredients or tags.
        </div>
      </div>
    </aside>
  );
}
