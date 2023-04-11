/*
  MenuView.js

  This component provides the menu in dining hall pages. 
*/

// import { useState } from "react";

import MenuItem from "./MenuItem.js";

export default function MenuView({ menu, date, id }) {
  // TODO: change menu based on date
  const itemList = menu.map((item) => <MenuItem key={item.key} item={item} />);

  return (
    <div>
      <h2>
        Menu for {id} at {date}
      </h2>
      <ul>{itemList}</ul>
    </div>
  );
}
