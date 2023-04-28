// import { useState } from "react";

import Head from "next/head";
import DiningHallView from "../components/DiningHallView";
import ServiceView from "../components/ServiceView";
import { useRouter } from "next/router";
import styles from "../styles/button.module.css";
import styles1 from "../styles/Home.module.css";

export default function MealHow() {
  const router = useRouter();
  function routeDiningHall(diningHall) {
    if (diningHall) {
      router.push(`/place/${diningHall}`);
    } else {
      router.back;
    }
  }

  function routeService(service) {
    if (service) {
      router.push(`/service/${service}`);
    } else {
      router.back;
    }
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <Head className={styles1.mainBack}>
        <title>MealHow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`text-center ${styles.newFont} ${styles1.mainBack} border border-primary`}
      >
        <h1 className={`${styles1.headerSet}`}>MealHow</h1>
        <DiningHallView
          className={styles1.mainBack1}
          routeDiningHall={routeDiningHall}
        />
        <ServiceView routeService={routeService} />
      </main>

      <footer className={`text-center bg-secondary ${styles1.footerSet}`}>
        CS 312 Project
      </footer>
    </div>
  );
}
