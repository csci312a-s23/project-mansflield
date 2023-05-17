/*
  MenuView.js

  This component provides the menu in dining hall pages. 
*/

// import { useState } from "react";
// import dayjs from "dayjs";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
export default function MenuView({ menu, date, hall }) {
  // TODO: change menu based on date
  const listItems = menu.map((item) => {
    if (item.is_title) {
      return (
        <Typography variant="h6" key={item.id}>
          {item.name}
        </Typography>
      );
    } else {
      return (
        <ListItem key={item.id} sx={{ paddingY: 0.5 }}>
          <ListItemText
            primary={item.name}
            secondary={item.price && `$${item.price.toFixed(2)}`}
          />
        </ListItem>
      );
    }
  });

  return (
    <Box>
      <Typography variant="h4">Menu</Typography>
      <List>{listItems}</List>
    </Box>
  );
}

MenuView.propTypes = {
  menu: PropTypes.arrayOf(String).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  hall: PropTypes.object.isRequired,
};
