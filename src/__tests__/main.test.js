import Home from "@/pages/index";
import PlacePage from "@/pages/place/[id]";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder
    "/place/[id]",
  ])
);
jest.mock("next/router", () => require("next-router-mock"));

import fetchMock from "fetch-mock-jest";

import proctor from "@/data/test-proctor.json";

describe("End-to-end testing", () => {
  beforeAll(() => {
    fetchMock.get("*", () => {
      return proctor;
    });
  });

  test("Render index.js component", async () => {
    await act(() => {
      render(<Home />);
    });
  });
  test("Render page for Proctor", async () => {
    mockRouter.push("/place/proctor/");
    await act(() => {
      render(<PlacePage />);
    });
    const named = await screen.findByText(/Radicchio/i);
    expect(named).toBeInTheDocument();
  });
  //
});
