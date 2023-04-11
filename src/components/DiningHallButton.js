/*
  DiningHallButton.js

  This component provides the indivual buttons in DiningHallView. 
*/

// import { useState } from "react";

export default function DiningHallButton({ id }) {
  // backend returns these
  const busy = "Not very";
  // adjust hue from red to green
  const busyColor = {
    background: "#008140",
  };
  const tables = "Few";

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
