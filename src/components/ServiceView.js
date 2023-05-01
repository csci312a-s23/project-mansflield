/*
  Service.js

  This component provides the main page view that contains retail services. 
*/

// import { useState } from "react";

import ServiceButton from "./ServiceButton";
import { List } from "@mui/material";

import retail from "@/data/retail.json";

export default function DiningHallView({ routeService, time }) {
  const buttons = retail.map((place) => {
    return (
      <ServiceButton
        key={place.id}
        place={place}
        time={time}
        routeService={routeService}
      />
    );
  });
  return <List sx={{ minWidth: 360 }}>{buttons}</List>;
}
