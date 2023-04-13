/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/

import { useState, useEffect, useRef } from "react";

export default function BusynessView({ id, busy, busyColor }) {
  const [busyness, setBusyness] = useState(50);

  const onChange = (event) => {
    setBusyness(parseInt(event.target.value));
  };

  const queryTimeout = useRef(null);
  useEffect(() => {
    clearTimeout(queryTimeout.current);
    queryTimeout.current = setTimeout(() => {
      //This is where we process the input value from the slider.
      //The useEffect code makes sure the slider doesn't send a ton of values every
      //time you move it

      //placeholder use of id
      id;
    }, 400);
  }, []);

  return (
    <>
      <button className="dining-hall" style={busyColor}>
        {busy}
      </button>
      <br />
      <input
        type="range"
        min="1"
        max="100"
        value={busyness}
        className="slider"
        onChange={onChange}
      />
    </>
  );
}
