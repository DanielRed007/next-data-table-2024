import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const mainTitle = screen.getByText("main table");
    expect(mainTitle).toBeInTheDocument();
  });
});
