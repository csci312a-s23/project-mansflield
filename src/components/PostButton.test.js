import { render, fireEvent } from "@testing-library/react";
import PostButton from "./PostButton";

describe("PostButton", () => {
  test("renders without errors", () => {
    render(<PostButton />);
  });

  test("renders post button correctly", () => {
    const { getByText } = render(<PostButton />);
    const buttonText = getByText("What are MiddKids saying?");
    expect(buttonText).toBeInTheDocument();
  });

  test("calls routePosts when the button is clicked", () => {
    const routePostsMock = jest.fn();
    const { getByRole } = render(<PostButton routePosts={routePostsMock} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(routePostsMock).toHaveBeenCalled();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
});
