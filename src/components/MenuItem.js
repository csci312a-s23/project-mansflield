const React = require("react");
const { List, ListItem, ListItemText, Typography } = require("@mui/material");

const MenuItems = ({ items }) => {
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
};

module.exports = MenuItems;
