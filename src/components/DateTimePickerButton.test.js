import { render, screen, fireEvent } from "@testing-library/react";
import DateTimePickerButton from "./DateTimePickerButton";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

describe("DateTimePickerButton", () => {
  const setTime = jest.fn();
  const time = dayjs();

  test("renders date time picker button", async () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePickerButton time={time} setTime={setTime} />
      </LocalizationProvider>
    );

    const button = screen.getByLabelText("back to today");
    fireEvent.click(button);
    expect(screen.getByText("Select Date and Time")).toBeInTheDocument();
  });

  test("updates time when 'Now' button is clicked", async () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePickerButton time={time} setTime={setTime} />
      </LocalizationProvider>
    );
    const button = screen.getByLabelText("back to today");
    fireEvent.click(button);
    const nowButton = screen.getByText("Now");
    fireEvent.click(nowButton);
    expect(setTime).toHaveBeenCalledTimes(2); // setTime is called twice
    expect(setTime).toHaveBeenCalledWith(dayjs()); // with dayjs() as the argument
    expect(screen.queryByText("Select Date and Time")).toBeNull(); // dialog is closed
  });
});
