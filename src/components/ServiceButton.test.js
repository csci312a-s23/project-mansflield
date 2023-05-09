import { render, screen } from "@testing-library/react";
import ServiceButton from "./ServiceButton";

describe("ServiceButton", () => {
  const place = { id: 1, name: "Ross" };
  const routeService = jest.fn();
  const time = "2023-05-08T12:00:00Z";

  test("Place name is rendered", async () => {
    render(
      <ServiceButton place={place} routeService={routeService} time={time} />
    );
    const placeName = await screen.findByText(place.name);
    expect(placeName).toBeInTheDocument();
  });

  test("calls routeService when button is clicked", async () => {
    render(
      <ServiceButton place={place} routeService={routeService} time={time} />
    );

    const button = await screen.findByRole("button");
    button.click();

    expect(routeService).toHaveBeenCalledWith(place.id);
  });
});
