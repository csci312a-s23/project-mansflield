/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";

import DiningHallButton from "./DiningHallButton.js";
import { List } from "@mui/material";

import halls from "@/data/halls.json";

export default function DiningHallView({ routeDiningHall }) {
  const buttons = halls.map((hall) => {
    return (
      <DiningHallButton
        key={hall.id}
        hall={hall}
        routeDiningHall={routeDiningHall}
      />
    );
  });
  return <List sx={{ minWidth: 360 }}>{buttons}</List>;
}
