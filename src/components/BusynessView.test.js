import dayjs from "dayjs";
import { render, screen, fireEvent } from "@testing-library/react";
import BusynessView from "./BusynessView";

describe("BusynessView", () => {
  const hall = {
    id: "1",
    name: "Hall 1",
  };

  const info = {
    busy: "Busy",
    busyVal: 0, // add initial value
    menu: [], // add menu prop
  };

  const date = dayjs();

  test("displays busyness button and slider", () => {
    render(<BusynessView hall={hall} info={info} date={date} type="hall" />);
    const button = screen.getAllByText(/Busy/i)[0];
    const slider = screen.getByRole("slider");
    expect(button).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });

  test("updates busyness state when the slider value changes", () => {
    render(<BusynessView hall={hall} info={info} date={date} type="hall" />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 3 } });
    expect(+slider.value).toBe(3);
  });
});
