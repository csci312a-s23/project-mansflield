// import { useState } from "react";

import Head from "next/head";
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
    <div>
      <Head>
        <title>MealHow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">MealHow</h1>
        <DiningHallView routeDiningHall={routeDiningHall} />
      </main>

      <footer>CS 312 Project</footer>
    </div>
  );
}
