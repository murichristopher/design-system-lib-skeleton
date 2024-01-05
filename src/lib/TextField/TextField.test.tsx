import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextField from "./TextField";

describe("TextField", () => {
  test("renders without crashing", () => {
    render(<TextField label="Teste" />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });

  test("handles click events", () => {
    const handleClick = jest.fn();

    render(<TextField label="Teste" onClick={handleClick} />);

    fireEvent.click(screen.getByRole("textbox"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
