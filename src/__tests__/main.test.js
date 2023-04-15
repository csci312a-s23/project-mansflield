import Home from "@/pages/index";
import PlacePage from "@/pages/place/[id]";
import { render } from "@testing-library/react";
import mockRouter from "next-router-mock";

import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder
    "/place/[id]",
  ])
);

require("jest-fetch-mock").enableMocks();

jest.mock("next/router", () => require("next-router-mock"));

describe("End-to-end testing", () => {
  test("Render index.js component", () => {
    render(<Home />);
  });
  test("Render page for Proctor", () => {
    mockRouter.push("/place/proctor/");
    render(<PlacePage />);
  });
  //
});
