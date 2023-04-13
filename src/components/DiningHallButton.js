/*
  DiningHallButton.js

  This component provides the indivual buttons in DiningHallView. 
*/

// import { useState } from "react";

export default function DiningHallButton({ id, routeDiningHall }) {
  // backend returns these
  const busy = "Not very";

  // adjust hue from red to green
  const busyColor = {
    background: "#008140",
  };
  const tables = "Few";

  const diningHallName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <>
      {/* TODO: go to /place/proctor on click*/}
      <button
        className="dining-hall"
        style={busyColor}
        onClick={() => {
          routeDiningHall(id);
        }}
      >
        {diningHallName}
      </button>
      <p>{busy}</p>
      <p>{tables}</p>
    </>
  );
}
