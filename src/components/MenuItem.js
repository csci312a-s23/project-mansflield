import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export default function MenuItem({ items }) {
  const listItems = items.map((item) => {
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
  return <List>{listItems}</List>;
}
