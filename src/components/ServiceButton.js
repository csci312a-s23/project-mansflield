/*
  ServiceButton.js

  This component provides the indivual buttons in ServiceView. 
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

export default function ServiceButton({ place, routeService, time }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (time) {
      fetch(`/api/retail/${place.id}?t=${+time}`)
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
  }, [place, time]);

  return (
    <ListItemButton
      alignItems="flex-start"
      onClick={() => {
        routeService(place.id);
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
        primary={place.name}
        secondary={
          info ? (
            info.busy
          ) : (
            <Skeleton variant="text" width={160} x={{ fontSize: "0.6rem" }} />
          )
        }
      />
    </ListItemButton>
  );
}

ServiceButton.propTypes = {
  place: PropTypes.object.isRequired,
  routeService: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};
