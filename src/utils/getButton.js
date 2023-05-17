import SignalWifi0BarIcon from "@mui/icons-material/SignalWifi0Bar";
import SignalWifi1BarIcon from "@mui/icons-material/SignalWifi1Bar";
import SignalWifi2BarIcon from "@mui/icons-material/SignalWifi2Bar";
import SignalWifi3BarIcon from "@mui/icons-material/SignalWifi3Bar";
import SignalWifi4BarIcon from "@mui/icons-material/SignalWifi4Bar";
import SignalWifiOffIcon from "@mui/icons-material/SignalWifiOff";

export const getButton = (n) => {
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
  }
};
