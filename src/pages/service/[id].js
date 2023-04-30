//import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import BusynessView from "@/components/BusynessView";
import { useRouter } from "next/router";
import styles from "../../styles/button.module.css";

export default function PlacePage({}) {
  const router = useRouter();

  const [busy, setBusy] = useState();
  const [busyColor, setBusyColor] = useState();

  const [date, setDate] = useState(new Date()); // eslint-disable-line no-unused-vars

  const { id } = router.query;

  // TODO: opening times

  // TODO: send date
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

  return (
    <div>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title" class={styles.dining_hall}>
          {id}
        </h1>
        <BusynessView busy={busy} busyColor={busyColor} />
      </main>
    </div>
  ); //Add a view for whether it's open?
}
