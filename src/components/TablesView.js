/*
  TablesView.js

  This component provides the how many tables text and slider in individial dining hall pages.
*/

import { useState } from "react";

export default function TablesView({ id, tables }) {
  const [value, setValue] = useState(50);
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <>
      <p>
        Tables at {id}: {tables}
      </p>
      <div>
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          className="slider"
          onChange={onChange}
        />
        <button>Submit</button>
      </div>
    </>
  );
}
