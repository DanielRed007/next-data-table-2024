import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TableNavbar } from "../../components/navbar/TableNavbar";

describe("TableNavbar Test Suite", () => {
  it("renders a Table Navbar", () => {
    render(<TableNavbar />);

    const navBarTitle = screen.getByText("Record Data Registry");
    expect(navBarTitle).toBeInTheDocument();
  });

  it("renders a Table Navbar buttons", () => {
    render(<TableNavbar />);

    const navBarButtonSection = screen.getByTestId("navbar-button-section");
    expect(navBarButtonSection).toBeInTheDocument();
  });
});
