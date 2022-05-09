import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders default App behaviour", () => {
  render(<App />);
  screen.debug();
});
