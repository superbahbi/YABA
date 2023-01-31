import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from "../";

test("renders component successfully", () => {
  render(<Form />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});
