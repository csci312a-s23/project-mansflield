/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";
import DiningHallButton from "./DiningHallButton.js";

export default function DiningHallView() {
  return (
    <div>
      <DiningHallButton id="Proctor" />
      <DiningHallButton id="Ross" />
      <DiningHallButton id="Atwater" />
    </div>
  );
}
