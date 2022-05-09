import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { act } from "react-dom/test-utils";

describe("Button component", () => {
  test("Renders button with default values", () => {
    render(<Button />);
    const element = screen.getByRole("button");
    expect(element).toBeEnabled();
    expect(element).toHaveClass("button");
  });

  test("Renders button with disabled set to true", () => {
    render(<Button disabled={true} />);
    const element = screen.getByRole("button");
    expect(element).toBeDisabled();
  });

  test("Renders button with custom class", () => {
    render(<Button class="custom_class" />);
    const element = screen.getByRole("button");
    expect(element).toHaveClass("custom_class");
    expect(element).not.toHaveClass("button");
  });

  test("Renders button with different type", () => {
    render(<Button type="reset" />);
    const element = screen.getByRole("button");
    expect(element).toHaveAttribute("type", "reset");
    expect(element).not.toHaveAttribute("type", "button");
  });

  test("Renders button with custom click handler function", () => {
    const returnDummyText = jest.fn();

    render(<Button onClick={returnDummyText} />);
    const element = screen.getByRole("button");

    act(() => {
      element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(returnDummyText).toBeCalledTimes(1);
    expect(returnDummyText).toHaveReturned();

    act(() => {
      for (let i = 0; i < 5; i++) {
        element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });

    expect(returnDummyText).toBeCalledTimes(6);
    expect(returnDummyText).toHaveReturned();
  });
});
