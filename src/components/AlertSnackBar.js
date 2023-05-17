/*
  AlertSnackBar.js

  This component provides the SnackBar after users submit something. 
*/

import { Snackbar, Alert } from "@mui/material";
import PropTypes from "prop-types";

export default function AlertSnackBar({ severity, message, open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

AlertSnackBar.propTypes = {
  severity: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
