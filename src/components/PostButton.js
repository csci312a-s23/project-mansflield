/*
This will make the button that will take you to the posts page
*/
//import { useState } from "react";
import Menu from "@mui/icons-material/Menu";
import {
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

export default function PostButton({ routePosts }) {
  return (
    <>
      <ListItemButton
        onClick={() => {
          routePosts();
        }}
      >
        <ListItemAvatar>
          <Avatar>
            <Menu />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>What are MiddKids saying?</ListItemText>
      </ListItemButton>
    </>
  );
}
