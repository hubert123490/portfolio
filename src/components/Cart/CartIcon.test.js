import { render, screen } from "@testing-library/react";
import CartIcon from "./CartIcon";

describe("CartIcon component", () => {
  test("Renders cart icon", () => {
    render(<CartIcon />);
    const element = screen.findByRole("svg")
    expect(element).toBeDefined()
  });
});
