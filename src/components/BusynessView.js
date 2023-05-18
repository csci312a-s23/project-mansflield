/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/

import dayjs from "dayjs";
import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { formatBusyValue } from "@/utils/formatBusyValue";
import AlertSnackBar from "./AlertSnackBar";

export default function BusynessView({ hall, info, date, type }) {
  const [busyness, setBusyness] = useState(info.busyVal);

  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("Thank you!");

  const [open, setOpen] = useState(false);

  const slideChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setBusyness(newValue);
    }
    setBusyness(parseInt(event.target.value));
  };

  const submitChange = async () => {
    const t = date.valueOf();
    try {
      const response = await fetch(`/api/${type}/${hall.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: hall.id,
          t: t,
          type: "line",
          val: busyness,
        }),
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
      <Box>
        <Typography align="center" variant="h5">
          {info.busy}
        </Typography>
      </Box>
      <br />
      {info.busyVal !== -1 ? (
        <Stack direction="row" spacing={2}>
          <Slider
            value={busyness}
            defaultValue={2}
            step={1}
            marks
            min={0}
            max={4}
            getAriaValueText={formatBusyValue}
            valueLabelFormat={formatBusyValue}
            onChange={slideChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
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
      ) : (
        <p>Check back later.</p>
      )}
    </>
  );
}

BusynessView.propTypes = {
  hall: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  info: PropTypes.shape({
    busy: PropTypes.string.isRequired,
    busyVal: PropTypes.number,
    tables: PropTypes.string,
    tablesVal: PropTypes.number,
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
  date: PropTypes.instanceOf(dayjs),
  type: PropTypes.oneOf(["hall", "retail"]).isRequired,
};
