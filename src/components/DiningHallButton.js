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
  const [info, setInfo] = useState();

  const [date, setDate] = useState(new Date()); // eslint-disable-line no-unused-vars

  useEffect(() => {
    fetch(`/api/hall/${hall.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setInfo(data);
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
            {info ? (
              info.busy
            ) : (
              <Skeleton variant="text" width={160} x={{ fontSize: "0.6rem" }} />
            )}
            <br />
            {info ? (
              info.tables
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
