/*
  DiningHallButton.js

  This component provides the indivual buttons in DiningHallView. 
*/

// import { useState } from "react";
import styles from "../styles/button.module.css";

export default function DiningHallButton({ id }) {
  // backend returns these
  const busy = "Not very";
  // adjust hue from red to green

  const tables = "Few";

  return (
    <div>
      {/* TODO: go to /place/proctor on click*/}
      <button className={styles.dining_hall} onClick={() => {}}>
        {id}
      </button>
      <p>Busy : {busy}</p>
      <p>Tables : {tables}</p>
    </div>
  );
}
