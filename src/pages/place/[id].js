//import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import BusynessView from "@/components/BusynessView";
import TablesView from "@/components/TablesView";
import MenuView from "@/components/MenuView";
import { useRouter } from "next/router";

export default function PlacePage({}) {
  const router = useRouter();

  const [busy, setBusy] = useState();
  const [busyColor, setBusyColor] = useState();
  const [tables, setTables] = useState();
  const [menu, setMenu] = useState();

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

    fetch(`/api/${id}/menu`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setMenu(data.menu);
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
        <h1 className="title">{id}</h1>
        <BusynessView busy={busy} busyColor={busyColor} />
        <TablesView id={id} tables={tables} />
        {menu ? (
          <MenuView menu={menu} date={date} id={id} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
