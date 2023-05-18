/*
  TablesView.js

  This component provides the how many tables text and slider in individial dining hall pages.
*/
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Slider, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { formatTableValue } from "@/utils/formatTableValue";
import AlertSnackBar from "./AlertSnackBar";

export default function TablesView({ hall, info, date }) {
  const [value, setValue] = useState(info.tablesVal);

  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("Thank you!");

  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const submitChange = async () => {
    const t = date.valueOf();
    try {
      const response = await fetch(`/api/hall/${hall.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: hall.id, t: t, type: "table", val: value }),
      });

      if (response.ok) {
        setSeverity("success");
        setMessage("Thank you!");
        setOpen(true);
      } else {
        setSeverity("error");
        setMessage("Something went wrong.");
        setOpen(true);
        console.log(response.statusText);
      }
    } catch (error) {
      setSeverity("error");
      setMessage("Something went wrong.");
      setOpen(true);
      console.log(error.message);
    }
  };

  return (
    <>
      <Typography>
        Tables at {hall.name}: {info.tables}
      </Typography>
      <Stack direction="row" spacing={2}>
        <Slider
          value={value}
          defaultValue={2}
          step={1}
          marks
          min={0}
          max={4}
          getAriaValueText={formatTableValue}
          valueLabelFormat={formatTableValue}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider2"
          onChange={handleChange} // Added the onChange event handler
        />
        <Button onClick={submitChange} type="button">
          Submit
        </Button>
        <AlertSnackBar
          severity={severity}
          message={message}
          open={open}
          setOpen={setOpen}
        />
      </Stack>
    </>
  );
}

TablesView.propTypes = {
  hall: PropTypes.object.isRequired,
  info: PropTypes.shape({
    busy: PropTypes.string.isRequired,
    busyVal: PropTypes.number.isRequired,
    tables: PropTypes.string.isRequired,
    tablesVal: PropTypes.number.isRequired,
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  date: PropTypes.instanceOf(dayjs).isRequired,
};
