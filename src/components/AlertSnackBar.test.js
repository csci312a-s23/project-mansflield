import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AlertSnackBar from "./AlertSnackBar";

describe("AlertSnackBar", () => {
  test("renders with the correct message and severity", () => {
    const { getByText } = render(
      <AlertSnackBar
        severity="error"
        message="This is an error message"
        open
        setOpen={() => {}}
      />
    );

    expect(getByText("This is an error message")).toBeInTheDocument();
    expect(
      getByText("This is an error message").closest(".MuiAlert-root")
    ).toHaveClass("MuiAlert-standardError");
  });

  test("calls the setOpen prop when the Snackbar is closed", () => {
    const setOpen = jest.fn();
    const { getByRole } = render(
      <AlertSnackBar
        severity="success"
        message="This is a success message"
        open
        setOpen={setOpen}
      />
    );

    fireEvent.click(getByRole("button")); // simulate click on the Snackbar close button

    expect(setOpen).toHaveBeenCalledTimes(1);
    expect(setOpen).toHaveBeenCalledWith(false);
  });
});
