import { render, screen } from "@testing-library/react";
import MenuView from "./MenuView";

describe("MenuView", () => {
  const menu = [
    {
      id: 1,
      name: "Clam Chowder",
      description: "A tasty Chowder",
      rating: 4.2,
    },
    {
      id: 2,
      name: "Chicken Salad",
      description: "A tasty Salad",
      rating: 4.0,
    },
  ];

  //const date = new Date();

  test("renders menu items correctly", () => {
    render(<MenuView menu={menu} />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(menu.length);
    menu.forEach((item, index) => {
      expect(items[index]).toHaveTextContent(item.name);
    });
  });
});
