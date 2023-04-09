/*
  DiningHallButton.js

  This component provides the indivual buttons in DiningHallView. 
*/

// import { useState } from "react";

export default function DiningHallButton({ id }) {
  // backend returns these
  busy = "Not very";
  // adjust hue from red to green
  busyColor = "background-color: " + "#008140";
  tables = "Few";

  return (
    <>
      {/* TODO: go to /place/proctor on click*/}
      <button className="dining-hall" style={busyColor} onClick={() => {}}>
        {id}
      </button>
      <p>{busy}</p>
      <p>{tables}</p>
    </>
  );
}
