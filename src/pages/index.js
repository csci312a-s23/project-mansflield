// import { useState } from "react";

import DiningHallView from "../components/DiningHallView";
import { useRouter } from "next/router";

export default function MealHow() {
  const router = useRouter();
  function routeDiningHall(diningHall) {
    if (diningHall) {
      router.push(`/place/${diningHall}`);
    } else {
      router.back;
    }
  }

  return (
    <>
      <DiningHallView routeDiningHall={routeDiningHall} />
    </>
  );
}
