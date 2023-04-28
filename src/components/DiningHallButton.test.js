import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DiningHallButton from "./DiningHallButton";

import fetchMock from "fetch-mock-jest";
import res from "@/data/test-data.json";
import halls from "@/data/halls.json";

describe("DiningHallButton", () => {
  beforeAll(() => {
    fetchMock.get("*", () => {
      return res;
    });
  });

  const hall = halls[0];
  const mockRouteDiningHall = jest.fn();

  it("renders button with dining hall name", async () => {
    render(
      <DiningHallButton hall={hall} routeDiningHall={mockRouteDiningHall} />
    );
    const buttonElement = await screen.findByText(/Proctor/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("displays busy status", async () => {
    await act(async () => {
      render(
        <DiningHallButton hall={hall} routeDiningHall={mockRouteDiningHall} />
      );
    });

    const busyElement = await screen.findByText(/Not busy/i);
    expect(busyElement).toBeInTheDocument();
  });

  it("displays table count", async () => {
    await act(async () => {
      render(
        <DiningHallButton hall={hall} routeDiningHall={mockRouteDiningHall} />
      );
    });

    const tableElement = await screen.findByText(/Few/i);
    expect(tableElement).toBeInTheDocument();
  });

  it("calls routeDiningHall function on button click", () => {
    render(
      <DiningHallButton hall={hall} routeDiningHall={mockRouteDiningHall} />
    );
    const buttonElement = screen.getByText(/Proctor/i);
    buttonElement.click();
    expect(mockRouteDiningHall).toHaveBeenCalledTimes(1);
    expect(mockRouteDiningHall).toHaveBeenCalledWith("proctor");
  });
});
