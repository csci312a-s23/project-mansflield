import { render, screen, fireEvent } from "@testing-library/react";
import TablesView from "./TablesView";

describe("TablesView", () => {
  const hall = {
    name: "Ross",
  };
  const info = {
    tables: "Few tables",
  };

  test("displays the correct name and table strings", () => {
    render(<TablesView hall={hall} info={info} />);
    expect(screen.getByText(new RegExp(info.tables))).toBeInTheDocument();
  });

  test("updates the state value when the slider is changed", () => {
    render(<TablesView hall={hall} info={info} />);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: 2 } });
    expect(screen.getByText(new RegExp(info.tables))).toBeInTheDocument();
    expect(+slider.value).toBe(2);
  });

  test("sets the slider range correctly", () => {
    render(<TablesView hall={hall} info={info} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("min", "0");
    expect(slider).toHaveAttribute("max", "4");
  });
});
