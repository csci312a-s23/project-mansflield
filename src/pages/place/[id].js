//import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BusynessView from "@/components/BusynessView";
import TablesView from "@/components/TablesView";
import MenuView from "@/components/MenuView";
import { useRouter } from "next/router";

import { Box, Container, Typography } from "@mui/material";

import halls from "@/data/halls.json";

export default function PlacePage({}) {
  const router = useRouter();

  const [busy, setBusy] = useState();
  const [busyColor, setBusyColor] = useState();
  const [tables, setTables] = useState();
  const [menu, setMenu] = useState();

  const [date, setDate] = useState(new Date()); // eslint-disable-line no-unused-vars

  const hall = halls.find((eachHall) => eachHall.id === router.query.id);

  // TODO: send date
  useEffect(() => {
    fetch(`/api/${hall.id}/busy`)
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

    fetch(`/api/${hall.id}/tables`)
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

    fetch(`/api/${hall.id}/menu`)
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
  }, [hall, date]);

  return (
    <>
      <header>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography component="h1" variant="h3" align="center">
            {hall.name}
          </Typography>
          <Typography component="p" className="tagline" align="center">
            {hall.desc}
          </Typography>
        </Box>
      </header>
      <main>
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="center" alignItems="center">
            <BusynessView busy={busy} busyColor={busyColor} />
            <TablesView id={hall.id} tables={tables} />
            {menu ? (
              <MenuView menu={menu} date={date} id={hall.id} />
            ) : (
              <p>Loading...</p>
            )}
          </Box>
        </Container>
      </main>
    </>
  );
}
