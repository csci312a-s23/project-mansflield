/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";

import DiningHallButton from "./DiningHallButton.js";

export default function DiningHallView({ setDiningHall }) {
  return (
    <div>
      <DiningHallButton id="Proctor" setDiningHall={setDiningHall} />
      <DiningHallButton id="Ross" setDiningHall={setDiningHall} />
      <DiningHallButton id="Atwater" setDiningHall={setDiningHall} />
    </div>
  );
}
