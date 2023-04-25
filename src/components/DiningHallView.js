/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";

import DiningHallButton from "./DiningHallButton.js";

export default function DiningHallView({ routeDiningHall }) {
  return (
    <div>
      <DiningHallButton id="Proctor" routeDiningHall={routeDiningHall} />
      <DiningHallButton id="Ross" routeDiningHall={routeDiningHall} />
      <DiningHallButton id="Atwater" routeDiningHall={routeDiningHall} />
    </div>
  );
}
