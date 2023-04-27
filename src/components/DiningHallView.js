/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";

import DiningHallButton from "./DiningHallButton.js";
// import styles1 from "../styles/Home.module.css";

export default function DiningHallView({ routeDiningHall }) {
  return (
    <div>
      <DiningHallButton id="Proctor" routeDiningHall={routeDiningHall} />
      <DiningHallButton id="Ross" routeDiningHall={routeDiningHall} />
      <DiningHallButton id="Atwater" routeDiningHall={routeDiningHall} />
    </div>
  );
}
