import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
  test("Should render Header", async () => {
    render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
      global.innerWidth = 500;
      act(() => {
        global.dispatchEvent(new Event("resize"));
      });
    const element = screen.getByRole("banner");
    expect(element).toBeInTheDocument();
  });
});
