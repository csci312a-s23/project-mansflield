/*
  MenuView.js

  This component provides the menu in dining hall pages. 
*/

// import { useState } from "react";

import MenuItem from "./MenuItem.js";

export default function MenuView({ menu, date, id }) {
  // TODO: change menu based on date
  const itemList = menu.map((item) => <MenuItem key={item.key} item={item} />);
  const locale = (navigator && navigator.language) || "en-US";

  const diningHallName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div>
      <h2>
        Menu for {diningHallName} at {date.toLocaleDateString(locale)}
      </h2>
      <ul>{itemList}</ul>
    </div>
  );
}
