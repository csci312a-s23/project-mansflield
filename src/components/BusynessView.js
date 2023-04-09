/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/

import { useState } from "react";

export default function BusynessView({ busy, busyColor }) {
  const [value, setValue] = useState(50);
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

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
        value={value}
        class="slider"
        onChange={onChange}
      />
    </>
  );
}
