import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import App from "./App";

it("displays 😐 emoji by default", () => {
  render(<App />);
  expect(screen.getByText("😐")).toBeInTheDocument();
});

it("displays 😞 emoji when 0 is selected", async () => {
  render(<App />);

  const input = screen.getByLabelText(/feeling/i);
  fireEvent.change(input, { target: { value: 0 } });

  expect(screen.getByText("😞")).toBeInTheDocument();
});
