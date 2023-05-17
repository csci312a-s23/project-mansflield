import Home from "@/pages/index";
import PlacePage from "@/pages/place/[id]";
import RetailPage from "@/pages/service/[id]";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
mockRouter.useParser(
  createDynamicRouteParser([
    // These paths should match those found in the `/pages` folder
    "/place/[id]",
    "/service/[id]",
  ])
);
jest.mock("next/router", () => require("next-router-mock"));

import fetchMock from "fetch-mock-jest";

import proctor from "@/data/test-proctor.json";
import crossroads from "@/data/test-crossroads.json";

describe("End-to-end testing", () => {
  beforeAll(() => {
    fetchMock.get(/^\/api\/hall\/.+$/i, () => {
      return proctor;
    });
    fetchMock.get(/^\/api\/retail\/.+$/i, () => {
      return crossroads;
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
    const named = await screen.findByText(/Mushrooms/i);
    expect(named).toBeInTheDocument();
  });
  test("Render page for Crossroads Cafe", async () => {
    mockRouter.push("/service/crossroads/");
    await act(() => {
      render(<RetailPage />);
    });
    const named = await screen.findByText(/Honeybee/i);
    expect(named).toBeInTheDocument();
  });
  //
});
