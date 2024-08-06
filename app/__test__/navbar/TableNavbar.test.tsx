import "@testing-library/jest-dom";
import { render, screen } from "../../util/test/customRender";
import { TableNavbar } from "../../components/navbar/TableNavbar";

describe("Table Navbar", () => {
  it("renders a table navbar", () => {
    render(<TableNavbar />);

    const title1 = screen.getByText("Record Data Registry");
    const title2 = screen.getByText("Data Entry");

    const deleteBtn = screen.getByText("Delete");
    const filtersBtn = screen.getByText("Filters");

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    expect(deleteBtn).toBeInTheDocument();
    expect(filtersBtn).toBeInTheDocument();
  });
});
