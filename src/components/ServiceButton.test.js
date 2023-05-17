import { render, screen } from "@testing-library/react";
import ServiceButton from "./ServiceButton";
import { act } from "react-dom/test-utils";

describe("ServiceButton", () => {
  const place = { id: 1, name: "Ross" };
  const routeService = jest.fn();
  const time = "2023-05-08T12:00:00Z";

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ busyVal: 2, busy: "Busy" }),
    });
  });

  test("Place name is rendered", async () => {
    await act(async () => {
      render(
        <ServiceButton place={place} routeService={routeService} time={time} />
      );
    });
    const placeName = screen.getByText(place.name);
    expect(placeName).toBeInTheDocument();
  });

  test("calls routeService when button is clicked", async () => {
    await act(async () => {
      render(
        <ServiceButton place={place} routeService={routeService} time={time} />
      );
    });

    const button = screen.getByRole("button");
    button.click();

    expect(routeService).toHaveBeenCalledWith(place.id);
  });
});
