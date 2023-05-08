/*
  TablesView.js

  This component provides the how many tables text and slider in individial dining hall pages.
*/
import * as React from "react";
import { useState } from "react";
import { Button, Slider, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function TablesView({ hall, info }) {
  const [value, setValue] = useState(info.tablesVal);

  function Tvaluetext(Tvalue) {
    const TableAmount = [
      "Completely Empty",
      "Many Tables",
      "A Few Tables Left",
      "Barely Find One",
      "No Tables Left",
    ];
    const TableIndex = Tvalue;
    return `${TableAmount[TableIndex]}`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SubmitChange = (event) => {
    setValue(parseInt(event.target.value));
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
          getAriaValueText={Tvaluetext}
          valueLabelFormat={Tvaluetext}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider2"
          onChange={handleChange} // Added the onChange event handler
        />
        <Button onClick={SubmitChange} type="button">
          Submit
        </Button>
      </Stack>
    </>
  );
}

TablesView.propTypes = {
  hall: PropTypes.object.isRequired,
  info: PropTypes.shape({
    busy: PropTypes.number.isRequired,
    busyVal: PropTypes.number.isRequired,
    tables: PropTypes.string.isRequired,
    tablesVal: PropTypes.number.isRequired,
    menu: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};
