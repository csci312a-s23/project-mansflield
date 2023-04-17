import { render, screen, fireEvent } from "@testing-library/react";
import DiningHallView from "./DiningHallView";

import fetchMock from "fetch-mock-jest";
import res from "../../data/test-data.json";

describe("DiningHallView", () => {
  const mockRouteDiningHall = jest.fn();
  beforeAll(() => {
    fetchMock.get("*", () => {
      return res;
    });
  });

  it("renders three dining hall buttons", () => {
    render(<DiningHallView routeDiningHall={mockRouteDiningHall} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
    expect(screen.getByText("Proctor")).toBeInTheDocument();
    expect(screen.getByText("Ross")).toBeInTheDocument();
    expect(screen.getByText("Atwater")).toBeInTheDocument();
  });

  it("calls the routeDiningHall function with the correct argument when a button is clicked", () => {
    render(<DiningHallView routeDiningHall={mockRouteDiningHall} />);
    const button = screen.getByText("Ross");
    fireEvent.click(button);
    expect(mockRouteDiningHall).toHaveBeenCalledTimes(1);
    expect(mockRouteDiningHall).toHaveBeenCalledWith("ross");
  });
});
