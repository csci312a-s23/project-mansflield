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
import PropTypes from "prop-types";
import { getButton } from "@/utils/getButton";
import dayjs from "dayjs";

export default function DiningHallButton({ hall, routeDiningHall, time }) {
  const [info, setInfo] = useState();

  useEffect(() => {
    if (time) {
      fetch(`/api/hall/${hall.id}?t=${+time}`)
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
    }
  }, [hall, time]);

  return (
    <ListItemButton
      alignItems="flex-start"
      onClick={() => {
        routeDiningHall(hall.id);
      }}
    >
      <ListItemAvatar>
        <Avatar>
          {info ? (
            getButton(info.busyVal)
          ) : (
            <Skeleton variant="circular" width={40} height={40} />
          )}
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

DiningHallButton.propTypes = {
  hall: PropTypes.object.isRequired,
  routeDiningHall: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(dayjs),
};
