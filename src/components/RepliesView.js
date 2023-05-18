/*
  RepliesView.js

  This component provides the posts in /posts. 
*/
// import {
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
// } from "@mui/material";
import { useState, useEffect } from "react";

export default function RepliesView({ id }) {
  const [replies, setReplies] = useState();

  useEffect(() => {
    // fetch data from api
    if (!replies) {
      fetch(`/api/replies/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setReplies(data);
        });
    }
  });

  const repliesComponent =
    replies && replies.length > 0 ? (
      replies.map((reply) => {
        return <p key={reply.id}>{reply.contents}</p>;
      })
    ) : (
      <p>No comments yet!</p>
    );

  return repliesComponent;
}
