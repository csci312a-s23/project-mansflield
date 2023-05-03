/*
  TablesView.js

  This component provides the how many tables text and slider in individial dining hall pages.
*/

import { useState } from "react";
import PropTypes from "prop-types";

export default function TablesView({ hall, info }) {
  const [value, setValue] = useState(info.tablesVal);
  const onChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <>
      <p>
        Tables at {hall.name}: {info.tables}
      </p>
      <input
        type="range"
        min="0"
        max="4"
        value={value}
        className="slider"
        onChange={onChange}
      />
    </>
  );
}

TablesView.propTypes = {
  hall: PropTypes.object.isRequired,
  info: PropTypes.shape({
    busy: PropTypes.number.isRequired,
    busyVal: PropTypes.number.isRequired,
    tables: PropTypes.string.isRequired,
    tablesVal: PropTypes.number.isRequired,
    menu: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};
