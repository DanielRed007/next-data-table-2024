import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CustomButton } from "../../components/shared/CustomButton";
import { TrashIcon } from "@heroicons/react/16/solid";

describe("Table Navbar", () => {
  it("renders a custom button", () => {
    render(
      <CustomButton textColor='white' fontType='bold' buttonText='Delete' />
    );

    const deleteBtn = screen.getByText("Delete");
    expect(deleteBtn).toBeInTheDocument();
  });

  it("renders a custom button with icon", () => {
    render(
      <CustomButton
        textColor='white'
        fontType='bold'
        buttonText='Delete'
        icon={<TrashIcon className='size-6 text-blue-200' />}
      />
    );

    const deleteBtn = screen.getByText("Delete");
    expect(deleteBtn).toBeInTheDocument();
  });
});
