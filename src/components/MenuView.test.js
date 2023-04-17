import { render, screen } from "@testing-library/react";
import MenuView from "./MenuView";

describe("MenuView", () => {
  const menu = [
    {
      key: 1,
      name: "Clam Chowder",
      description: "A tasty Chowder",
      rating: 4.2,
    },
    {
      key: 2,
      name: "Chicken Salad",
      description: "A tasty Salad",
      rating: 4.0,
    },
  ];
  const date = new Date();

  it("displays the correct dining hall name", () => {
    render(<MenuView menu={menu} date={date} id="ross" />);
    expect(screen.getByRole("heading")).toHaveTextContent("Menu for Ross");
  });

  it("displays the correct date today", () => {
    render(<MenuView menu={menu} date={date} id="ross" />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      date.toLocaleDateString()
    );
  });

  it("displays the correct date for a different date", () => {
    const newDate = new Date(2022, 7, 9); // August 9th, 2022
    render(<MenuView menu={menu} date={newDate} id="ross" />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      newDate.toLocaleDateString()
    );
  });

  it("renders menu items correctly", () => {
    render(<MenuView menu={menu} date={date} id="ross" />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(menu.length);
    menu.forEach((item, index) => {
      expect(items[index]).toHaveTextContent(item.name);
      expect(items[index]).toHaveTextContent(item.description);
      expect(items[index]).toHaveTextContent(`${item.rating}/5.0`);
    });
  });
});
