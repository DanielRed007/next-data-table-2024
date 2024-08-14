import "@testing-library/jest-dom";
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "../../util/test/customRender";
import Page from "../../page";
import fetchMock from "jest-fetch-mock";
import { homeDataMock } from "../mocks/homeDataMock";

describe("Home Page", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders loader while fetching data", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(homeDataMock));

    render(<Page />);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith("/api/info", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: undefined,
      });
    });

    expect(await screen.findByText("Rafaela71@yahoo.com")).toBeInTheDocument();
  });

  it("renders a ow dropdown when click the icon", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(homeDataMock));

    render(<Page />);

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith("/api/info", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: undefined,
      });
    });

    const optionsButton = screen.getByTestId("66aff2b5ca3d74f186fa434d");

    fireEvent.click(optionsButton);

    await waitFor(() => {
      const editButton = screen.getByText("Edit");
      const deleteButton = screen.getByText("Delete");

      expect(editButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });
  });
});
