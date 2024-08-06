import "@testing-library/jest-dom";
import { render, screen, act, waitFor } from "../../util/test/customRender";
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
});
