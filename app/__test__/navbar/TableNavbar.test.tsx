import "@testing-library/jest-dom";
import { render, screen } from "../../util/test/customRender";
import { TableNavbar } from "../../components/navbar/TableNavbar";

describe("Table Navbar", () => {
  it("renders a table navbar", () => {
    render(<TableNavbar />);

    const title1 = screen.getByText("Record Data Registry");
    const title2 = screen.getByText("Data Entry");

    const exportBtn = screen.getByText("Export PDF");

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();

    expect(exportBtn).toBeInTheDocument();
  });
});
