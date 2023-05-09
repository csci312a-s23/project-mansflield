import { render, screen } from "@testing-library/react";
import ServiceButton from "./ServiceButton";

describe("ServiceButton", () => {
  const place = "Ross";

  test("Place name is rendered", async () => {
    render(<ServiceButton place={place} routeService={() => {}} time={0} />);
    const placeName = await screen.findByText("Ross");

    expect(placeName).toBeInTheDocument();
  });

  test("calls routeService when button is clicked", async () => {
    const mockFn = jest.fn();
    render(<ServiceButton place={place} routeService={mockFn} time={0} />);

    const button = await screen.findByRole("button");
    button.click();

    expect(mockFn).toHaveBeenCalledWith("Ross");
  });
});
