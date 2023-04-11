/*
  TablesView.js

  This component provides the how many tables text and slider in individial dining hall pages.
*/

import { useState } from "react";

export default function TablesView({ tables }) {
  const [value, setValue] = useState(50);
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <>
      <p>{tables}</p>
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
