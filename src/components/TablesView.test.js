import { render, screen, fireEvent } from "@testing-library/react";
import TablesView from "./TablesView";

describe("TablesView", () => {
  const tables = "Few";
  const id = "ross";

  it("displays the correct name and table strings", () => {
    render(<TablesView id={id} tables={tables} />);
    expect(screen.getByText(`Tables at ${id}: ${tables}`)).toBeInTheDocument();
  });

  it("updates the state value when the slider is changed", () => {
    render(<TablesView id={id} tables={tables} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 80 } });
    expect(screen.getByText(`Tables at ${id}: ${tables}`)).toBeInTheDocument();
    expect(+slider.value).toBe(80);
  });

  it("sets the slider range correctly", () => {
    render(<TablesView id={id} tables={tables} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("min", "1");
    expect(slider).toHaveAttribute("max", "100");
  });
});
