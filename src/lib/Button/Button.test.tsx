import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders without crashing", () => {
    render(<Button color="primary" size="md" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("applies correct classes based on color and size props", () => {
    render(<Button color="primary" size="sm" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-primary");
    expect(button).toHaveClass("btn-sm");
  });

  test("renders title when provided", () => {
    const title = "Test Title";
    render(<Button title={title} color="secondary" size="md" />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(
      <Button color="primary" size="lg">
        Click me
      </Button>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  test("forwards ref to button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref} color="primary" size="md" />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  test("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} color="primary" size="md" />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
