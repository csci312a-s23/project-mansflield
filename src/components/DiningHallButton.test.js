import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DiningHallButton from "./DiningHallButton";

import fetchMock from "fetch-mock-jest";
import proctor from "@/data/test-proctor.json";
import halls from "@/data/halls.json";

describe("DiningHallButton", () => {
  beforeAll(() => {
    fetchMock.get("*", () => {
      return proctor;
    });
  });

  const time = Date.now();
  const hall = halls[0];
  const mockRouteDiningHall = jest.fn();

  test("renders button with dining hall name", async () => {
    render(
      <DiningHallButton
        hall={hall}
        routeDiningHall={mockRouteDiningHall}
        time={time}
      />
    );
    const buttonElement = await screen.findByText(/Proctor/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("displays busy status", async () => {
    await act(async () => {
      render(
        <DiningHallButton
          hall={hall}
          routeDiningHall={mockRouteDiningHall}
          time={time}
        />
      );
    });

    const busyElement = await screen.findByText(/Very busy/i);
    expect(busyElement).toBeInTheDocument();
  });

  test("displays table count", async () => {
    await act(async () => {
      render(
        <DiningHallButton
          hall={hall}
          routeDiningHall={mockRouteDiningHall}
          time={time}
        />
      );
    });

    const tableElement = await screen.findByText(/Some tables left/i);
    expect(tableElement).toBeInTheDocument();
  });

  test("calls routeDiningHall function on button click", () => {
    render(
      <DiningHallButton
        hall={hall}
        routeDiningHall={mockRouteDiningHall}
        time={time}
      />
    );
    const buttonElement = screen.getByText(/Proctor/i);
    buttonElement.click();
    expect(mockRouteDiningHall).toHaveBeenCalledTimes(1);
    expect(mockRouteDiningHall).toHaveBeenCalledWith("proctor");
  });
});
