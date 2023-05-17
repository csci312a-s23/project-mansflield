/*
  DateTimePickerButton.js

  This component provides the floating action button for choosing a date and time.
*/

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Fab,
  Stack,
  useTheme,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import PropTypes from "prop-types";

export default function DateTimePickerButton({ time, setTime }) {
  const [open, setOpen] = useState(false);

  const [timeSelected, setTimeSelected] = useState(time);

  const handleDateChange = (newDate) => {
    setTimeSelected(newDate);
  };

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleOkay = () => {
    setTime(timeSelected);
    setOpen(false);
  };

  const handleNow = () => {
    setTimeSelected(dayjs());
    setTime(dayjs());
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        position: "fixed",
        bottom: useTheme().spacing(4),
        right: useTheme().spacing(4),
      }}
    >
      <Fab
        variant="extended"
        color="primary"
        aria-label="back to today"
        onClick={handleButtonClick}
      >
        <CalendarMonthIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="date-select"
        aria-describedby="date-select-description"
      >
        <DialogTitle>Select Date and Time</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" sx={{ mb: 2 }}>
            See data for the past, present, or the future!
          </DialogContentText>
          <DateTimePicker value={timeSelected} onChange={handleDateChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleNow}>Now</Button>
          <Button onClick={handleOkay} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

DateTimePickerButton.propTypes = {
  time: PropTypes.instanceOf(dayjs).isRequired,
  setTime: PropTypes.func.isRequired,
};
