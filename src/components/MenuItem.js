/*
  MenuItem.js

  This component provides the menu item in MenuView. 
*/

// import { useState } from "react";

export default function MenuItem({ item }) {
  return (
    <li key={item.name}>
      {item.description}
      {item.rating}
    </li>
  );
}
