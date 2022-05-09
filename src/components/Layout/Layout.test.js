import Layout from "./Layout";
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";

describe("Layout component", () => {
    test("Should render Header, main section and footer", () => {
      render(
          <MemoryRouter>
            <Layout />
          </MemoryRouter>
        );
      const header = screen.getByRole("banner");
      const footer = screen.getByRole("contentinfo");
      const mainSection = screen.getByRole("main")
      expect(header).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
      expect(mainSection).toBeInTheDocument();
    });
  });