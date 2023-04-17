import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("MenuItem", () => {
  const item = {
    name: "Clam Chowder",
    description: "A tasty Chowder",
    rating: 4.2,
  };

  it("renders item information correctly", () => {
    render(<MenuItem item={item} />);
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByText(`${item.rating}/5.0`)).toBeInTheDocument();
  });

  it("throws error when no item is provided", () => {
    expect(() => render(<MenuItem />)).toThrow();
  });
});
