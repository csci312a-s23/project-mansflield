/*
  DiningHallButton.js

  This component provides the indivual buttons in DiningHallView. 
*/

import { useEffect, useState } from "react";
import {
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Skeleton,
} from "@mui/material";
import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";

export default function DiningHallButton({ hall, routeDiningHall }) {
  const [busy, setBusy] = useState();
  //const [busyColor, setBusyColor] = useState();
  const [tables, setTables] = useState();

  const [date, setDate] = useState(new Date()); // eslint-disable-line no-unused-vars

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
  }, [hall, date]);

  return (
    <ListItemButton
      alignItems="flex-start"
      onClick={() => {
        routeDiningHall(hall.id);
      }}
    >
      <ListItemAvatar>
        <Avatar>
          <SignalWifi0BarIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={hall.name}
        secondary={
          <>
            {busy ? (
              busy
            ) : (
              <Skeleton variant="text" width={160} x={{ fontSize: "0.6rem" }} />
            )}
            <br />
            {tables ? (
              tables
            ) : (
              <Skeleton
                variant="text"
                width={160}
                sx={{ fontSize: "0.6rem" }}
              />
            )}
          </>
        }
      />
    </ListItemButton>
  );
}
