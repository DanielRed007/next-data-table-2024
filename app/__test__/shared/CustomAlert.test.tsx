import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CustomAlert } from "../../components/shared/CustomAlert";

describe("Table Navbar", () => {
  it("renders a custom alert", () => {
    render(<CustomAlert textContent='Custom Alert Text' />);

    const alertContainer = screen.getByRole("alert");

    expect(alertContainer).toBeInTheDocument();
  });
});
