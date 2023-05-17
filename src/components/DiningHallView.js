/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";

import DiningHallButton from "./DiningHallButton.js";
import { List } from "@mui/material";
import PropTypes from "prop-types";

import halls from "@/data/halls.json";

export default function DiningHallView({ routeDiningHall, time }) {
  const buttons = halls.map((hall) => {
    return (
      <DiningHallButton
        key={hall.id}
        hall={hall}
        time={time}
        routeDiningHall={routeDiningHall}
      />
    );
  });
  return <List sx={{ minWidth: 360 }}>{buttons}</List>;
}

DiningHallView.propTypes = {
  routeDiningHall: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(dayjs),
};
