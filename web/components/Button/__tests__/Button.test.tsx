import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../";

test("renders component successfully", () => {
  render(<Button>Test</Button>);
  const element = screen.getByTestId(/button-test/i);
  expect(element).toBeInTheDocument();
});
