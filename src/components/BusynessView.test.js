import { render, screen, fireEvent } from "@testing-library/react";
import BusynessView from "./BusynessView";

describe("BusynessView", () => {
  const info = {
    busy: "Busy",
  };
  it("displays busyness button and slider", () => {
    render(<BusynessView info={info} />);
    const button = screen.getByText(/Busy/i);
    const slider = screen.getByRole("slider");
    expect(button).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });

  it("updates busyness state when the slider value changes", () => {
    render(<BusynessView info={info} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 3 } });
    expect(+slider.value).toBe(3);
  });
});
