/*
  MenuView.js

  This component provides the menu in dining hall pages. 
*/

// import { useState } from "react";
// import dayjs from "dayjs";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function MenuView({ menu }) {
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
        <ListItem
          key={item.id}
          sx={{ paddingY: 0.5, justifyContent: "space-between" }}
        >
          <ListItemText primary={item.name} secondary={item.subtext} />
          {item.price && (
            <Typography variant="p" color="text.secondary">
              ${item.price.toFixed(2)}
            </Typography>
          )}
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
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      is_title: PropTypes.bool,
      name: PropTypes.string,
      subtext: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
};
