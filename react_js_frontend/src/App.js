import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

// PUBLIC_INTERFACE
export default function App() {
  /** App root with routes for recipe list and detail. */
  return (
    <Routes>
      <Route path="/" element={<RecipeListPage />} />
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
