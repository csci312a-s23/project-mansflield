/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/

import { useState, useEffect, useRef } from "react";

export default function BusynessView({ busy, busyColor, inputBusyness }) {
  const [busyness, setBusyness] = useState(50);

  const onChange = (event) => {
    setBusyness(parseInt(event.target.value));
  };

  //Makes sure that the slider doesn't get spammed with values every time you move it
  const queryTimeout = useRef(null);
  useEffect(() => {
    clearTimeout(queryTimeout.current);
    queryTimeout.current = setTimeout(() => {
      inputBusyness(busyness);
    }, 400);
  }, [busyness, inputBusyness]);

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
