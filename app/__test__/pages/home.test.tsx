import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../../page";

describe("Home Page", () => {
  it("renders home page", () => {
    render(<Page />);

    const mainTitle = screen.getByTestId("main-page-container");
    expect(mainTitle).toBeInTheDocument();
  });
});
