/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/
// import dayjs from "dayjs";
import { Box, Button, Slider, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
export default function BusynessView({ hall, info, date }) {
  const [busyness, setBusyness] = useState(info.busyVal);

  function valuetext(value) {
    const buzyness = [
      "Not Busy",
      "Just Fine",
      "Busy",
      "Very Busy",
      "Fully Packed",
    ];
    return `${buzyness[value]}`;
  }

  const slideChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setBusyness(newValue);
    }
    setBusyness(parseInt(event.target.value));
  };

  const submitChange = async () => {
    const t = date.toISOString().split("T")[0];
    try {
      const response = await fetch(`/api/hall/${hall.id}`, {
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
          value={busyness}
          defaultValue={2}
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
    busyness: PropTypes.number,
    tables: PropTypes.string,
    tablesVal: PropTypes.number,
    menu: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
