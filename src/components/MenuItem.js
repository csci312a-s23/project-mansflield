/*
  MenuItem.js

  This component provides the menu item in MenuView. 
*/

// import { useState } from "react";

export default function MenuItem({ item }) {
  return (
    <li key={item.name}>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.rating}/5.0</p>
    </li>
  );
}
