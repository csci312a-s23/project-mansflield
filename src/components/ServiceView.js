/*
  Service.js

  This component provides the main page view that contains retail services. 
*/

// import { useState } from "react";

import ServiceButton from "./ServiceButton.js";
import { List } from "@mui/material";
import PropTypes from "prop-types";
import dayjs from "dayjs";

import retail from "@/data/retail.json";

export default function ServiceView({ routeService, time }) {
  const buttons = retail.map((place) => {
    return (
      <ServiceButton
        key={place.id}
        place={place}
        time={time.format()}
        routeService={routeService}
      />
    );
  });
  return <List sx={{ minWidth: 360 }}>{buttons}</List>;
}

ServiceView.propTypes = {
  routeService: PropTypes.func.isRequired,
  time: PropTypes.instanceOf(dayjs),
};
