/*
  TablesView.js

  This component provides the how many tables text and slider in individial dining hall pages.
*/
import { useState } from "react";
import { Button, Slider, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { formatTableValue } from "@/utils/formatTableValue";

export default function TablesView({ hall, info, date }) {
  const [value, setValue] = useState(info.tablesVal);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const submitChange = async () => {
    const t = date.toISOString().split("T")[0];
    try {
      const response = await fetch(`/api/hall/${hall.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: hall.id, t: t, type: "table", val: value }),
      });

      if (response.ok) {
        // TODO: display message or sth
        console.log("OK, added to DB");
      } else {
        // TODO: display message or sth
        console.log(response.statusText);
      }
    } catch (error) {
      // TODO: display message or sth
      console.log(error.message);
    }
  };

  // const SubmitChange = (event) => {
  //   setValue(parseInt(event.target.value));
  // };

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
  date: PropTypes.instanceOf(Date).isRequired,
};
