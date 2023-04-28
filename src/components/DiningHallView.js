/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";

import DiningHallButton from "./DiningHallButton.js";

export default function DiningHallView({ routeDiningHall }) {
  return (
    <div>
      <h3>Dining Halls</h3>
      <DiningHallButton id="proctor" routeDiningHall={routeDiningHall} />
      <DiningHallButton id="ross" routeDiningHall={routeDiningHall} />
      <DiningHallButton id="atwater" routeDiningHall={routeDiningHall} />
    </div>
  );
}
