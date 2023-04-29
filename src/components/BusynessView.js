/*
  BusynessView.js

  This component provides the busyness button and slider in individial pages.
*/

import { useState, useEffect, useRef } from "react"; // eslint-disable-line no-unused-vars

// eslint-disable-next-line no-unused-vars
export default function BusynessView({ info }) {
  const [busyness, setBusyness] = useState(info.busyVal);

  const onChange = (event) => {
    setBusyness(parseInt(event.target.value));
  };

  /*
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
  */

  return (
    <>
      <button type="button" class="btn btn-outline-success">
        {info.busy}
      </button>
      <br />
      <input
        type="range"
        min="0"
        max="4"
        value={busyness}
        className="slider"
        onChange={onChange}
      />
    </>
  );
}
