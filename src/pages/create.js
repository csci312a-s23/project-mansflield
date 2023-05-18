//import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import Creator from "@/components/Creator";

export default function PostCreator({ setPosts }) {
  // post to the database
  const router = useRouter();
  const finished = (newpost) => {
    if (newpost) {
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
        })
        .catch((error) => console.log(error));
    } else {
      router.back();
    }
  };
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
      <Creator finished={finished} />
    </div>
  );
}
