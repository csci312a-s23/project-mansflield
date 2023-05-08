/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/
import * as React from "react";
import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { useState, useEffect, useRef } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
export default function BusynessView({ info }) {
  const [busyness, setBusyness] = useState(info.busyVal);
  const [busyVal, setBusyVal] = useState(info.busyVal);
  const [Bvalue, setBValue] = React.useState(10);

  function valuetext(value) {
    const buzyness = [
      "Not Busy",
      "Just Fine",
      "Busy",
      "Very Busy",
      "Fully Packed",
    ];
    const buzynessIndex = value;
    return `${buzyness[buzynessIndex]}`;
  }

  const slideChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setBValue(newValue);
    }
    setBusyVal(parseInt(event.target.value));
  };

  const submitChange = () => {
    setBusyness(parseInt(busyVal));
    console.log(busyness);
  };

  return (
    <>
      <Box>
        <Typography align="center" variant="h5">
          {info.busy}
        </Typography>
      </Box>
      <br />
      <Stack direction="row" spacing={2}>
        <Slider
          value={Bvalue}
          defaultValue={0}
          step={1}
          marks
          min={0}
          max={4}
          getAriaValueText={valuetext}
          valueLabelFormat={valuetext}
          onChange={slideChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
        <Button onClick={submitChange} type="button">
          Submit
        </Button>
      </Stack>
    </>
  );
}

BusynessView.propTypes = {
  info: PropTypes.shape({
    busy: PropTypes.string.isRequired,
    busyVal: PropTypes.number.isRequired,
    tables: PropTypes.string.isRequired,
    tablesVal: PropTypes.number.isRequired,
    menu: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};
