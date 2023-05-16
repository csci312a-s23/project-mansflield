import { render, screen, fireEvent } from "@testing-library/react";
import BusynessView from "./BusynessView";

describe("BusynessView", () => {
  const info = {
    busy: "Busy",
  };
  test("displays busyness button and slider", () => {
    render(<BusynessView info={info} />);
    const button = screen.getAllByText(/Busy/i)[0];
    const slider = screen.getByRole("slider");
    expect(button).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });

  test("updates busyness state when the slider value changes", () => {
    render(<BusynessView info={info} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 3 } });
    expect(+slider.value).toBe(3);
  });
});
