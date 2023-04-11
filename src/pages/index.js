// import { useState } from "react";

import Head from "next/head";
import DiningHallView from "../components/DiningHallView";

export default function MealHow() {
  function setDiningHall(diningHall) {
    if (diningHall) {
      router.push(`/place/${diningHall}`);
    } else {
      router.back;
    }
  }

  return (
    <div>
      <Head>
        <title>MealHow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">MealHow</h1>
        <DiningHallView setDiningHall={setDiningHall} />
      </main>

      <footer>CS 312 Project</footer>
    </div>
  );
}
