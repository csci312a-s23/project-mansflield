//import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import PostCreator from "@/components/PostCreator";

export default function NewPostPage({}) {
  // post to the database
  const router = useRouter();
  const finished = (p) => {
    console.log(p);
    if (p && p.subject && p.contents && p.user) {
      fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify(p),
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      })
        .then((response) => response.json())
        .then(() => {
          // setPosts(data);
          router.back();
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
            Posts
          </Typography>
          <Typography component="p" className="tagline" align="center">
            What are MiddKids saying?
          </Typography>
        </Box>
      </header>
      <PostCreator finished={finished} />
    </div>
  );
}
