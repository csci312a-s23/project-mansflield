import { render, screen, fireEvent } from "@testing-library/react";
import BusynessView from "./BusynessView";

describe("BusynessView", () => {
  it("displays busyness button and slider", () => {
    render(<BusynessView id="test" busy="Busy" busyColor={{}} />);
    const button = screen.getByText(/Busy/i);
    const slider = screen.getByRole("slider");
    expect(button).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
  });

  it("updates busyness state when the slider value changes", () => {
    render(<BusynessView id="test" busy="Busy" busyColor={{}} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 75 } });
    expect(+slider.value).toBe(75);
  });
});
