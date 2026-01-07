import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders search input", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const input = screen.getByPlaceholderText(/search recipes/i);
  expect(input).toBeInTheDocument();
});
