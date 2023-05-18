import dayjs from "dayjs";
import { render, screen } from "@testing-library/react";
import ServiceView from "./ServiceView";
import fetch from "node-fetch";
global.fetch = fetch;

// From the library retail, we are mocking 2 objects to be used on tests.

jest.mock("../data/retail.json", () => [
  {
    id: "grille",
    menu_id: "the-grille",
    name: "The Grille",
    desc: "Located in the McCullough Student Center.",
    has_menu: true,
    menus: [
      {
        id: "grille-menu-2022",
        name: "Grille",
      },
    ],
    schedule: [
      {
        day: 1,
        open: 1100,
        close: 1400,
      },
    ],
  },
  {
    id: "wilson",
    menu_id: "wilson-cafe",
    name: "Wilson Cafe",
    desc: "Located in the Lobby of Davis Family Library.",
    has_menu: true,
    menus: [
      {
        id: "coffee-and-drinks",
        name: "Drinks",
      },
      {
        id: "bagels-and-sandwiches",
        name: "Food",
      },
    ],
    schedule: [
      {
        day: 1,
        open: 800,
        close: 1600,
      },
    ],
  },
]);

jest.spyOn(global, "fetch").mockImplementation(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), // Replace [] with the data you want fetch to return
  })
);

describe("ServiceView", () => {
  test("Service View is rendering ServiceButton", async () => {
    const newRoute = jest.fn();
    const testTime = dayjs(Date.now());
    render(<ServiceView routeService={newRoute} time={testTime} />);
    // rendered as list -> role item = listitem & also as button so listitembutton
    const serviceButtons = await screen.findAllByRole("button");
    expect(serviceButtons).toHaveLength(2);
  });

  // Make sure to clear all mocks after the test is done.
  afterEach(() => {
    jest.resetAllMocks();
  });
});

//https://balavishnuvj.com/blog/testing-lists-items-with-react-testing-library/
