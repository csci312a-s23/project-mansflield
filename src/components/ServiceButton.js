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
import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SignalWifi1BarIcon from "@mui/icons-material/SignalWifi1Bar";
import SignalWifi2BarIcon from "@mui/icons-material/SignalWifi2Bar";
import SignalWifi3BarIcon from "@mui/icons-material/SignalWifi3Bar";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";
import PropTypes from "prop-types";

export default function ServiceButton({ place, routeService, time }) {
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch(`/api/retail/${place.id}?t=${time}`)
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
  }, [place, time]);

  function getButton(n) {
    switch (n) {
      case 0:
        return <SignalWifi0BarIcon />;
      case 1:
        return <SignalWifi1BarIcon />;
      case 2:
        return <SignalWifi2BarIcon />;
      case 3:
        return <SignalWifi3BarIcon />;
      case 4:
        return <SignalWifi4BarIcon />;

      default:
        return <SignalWifiOffIcon />;
      // throw new Error("Error in busyVal!");
    }
  }

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
  time: PropTypes.object.isRequired,
};
