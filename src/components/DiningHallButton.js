/*
  DiningHallButton.js

  This component provides the indivual buttons in DiningHallView. 
*/

import { useEffect, useState } from "react";

export default function DiningHallButton({ id, routeDiningHall }) {
  const [busy, setBusy] = useState();
  //const [busyColor, setBusyColor] = useState();
  const [tables, setTables] = useState();

  const [date, setDate] = useState(new Date()); // eslint-disable-line no-unused-vars
  useEffect(() => {
    fetch(`/api/${id}/busy`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setBusy(data.busy);
        setBusyColor(data.busyColor);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console

    fetch(`/api/${id}/tables`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTables(data.tables);
      })
      .catch((err) => console.log(err)); // eslint-disable-line no-console
  }, [id, date]);

  const diningHallName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <>
      <button
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
