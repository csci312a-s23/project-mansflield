//import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function PostCreator({ setPosts }) {
  // post to the database
  fetch(`/api/create`, {
    method: "POST",
    body: JSON.stringify(newpost),
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    });

  return (
    <div>
      <header>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography component="h1" variant="h3" align="center">
            MealHow
          </Typography>
          <Typography component="p" className="tagline" align="center">
            How will you eat next?
          </Typography>
        </Box>
      </header>
      {postComponents}
      <button onClick={() => routeCreate()}> + </button>
    </div>
  );
}
