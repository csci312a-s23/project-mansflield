// import { useState } from "react";

import Head from "next/head";
import DiningHallView from "../components/DiningHallView";

export default function MealHow() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MealHow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">MealHow</h1>
        <DiningHallView />
      </main>

      <footer>CS 312 Project</footer>
    </div>
  );
}
