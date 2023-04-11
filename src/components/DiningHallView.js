/*
  DiningHallView.js

  This component provides the main page view that contains three dining halls. 
*/

// import { useState } from "react";
import { useRouter } from "next/router";

import DiningHallButton from "./DiningHallButton.js";

export default function DiningHallView() {
  const router = useRouter();

  function setDiningHall(diningHall) {
    if (diningHall) {
      router.push(`/place/${diningHall}`);
    } else {
      router.back;
    }
  }

  return (
    <div>
      <DiningHallButton id="Proctor" setDiningHall={setDiningHall} />
      <DiningHallButton id="Ross" setDiningHall={setDiningHall} />
      <DiningHallButton id="Atwater" setDiningHall={setDiningHall} />
    </div>
  );
}
