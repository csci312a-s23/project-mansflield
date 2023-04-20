import { useEffect, useState } from "react";
import styles from "../styles/button.module.css";

export default function ServiceButton({ id, routeDiningHall }) {
  const [busy, setBusy] = useState();
  //const [busyColor, setBusyColor] = useState();

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
  }, [id, date]);

  const serviceName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <>
      <button
        className={styles.dining_hall}
        onClick={() => {
          routeDiningHall(id);
        }}
      >
        {serviceName}
      </button>
      <p>{busy}</p>
    </>
  );
}
