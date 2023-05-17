/*
This will be the page that actually displays the posts
There will be a separate file that creates the posts and posts them to the database similar to simplepeida creator
*/
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Post from "@/components/Post";
import { Box, Typography } from "@mui/material";

export default function PostPage({}) {
  const router = useRouter();
  const [posts, setPosts] = useState();

  function routeCreate() {
    router.push(`/create`);
  }

  useEffect(() => {
    // fetch data from api
    if (!posts) {
      fetch("/api/posts")
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data);
          setPosts(data);
        });
    }
  }, [posts]);

  const postComponents = posts
    ? posts.map((item) => {
        return (
          <Post
            key={item.id}
            subject={item.subject}
            contents={item.contents}
            owner={item.owner}
            //replies={item.replies}
          />
        );
      })
    : [];

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
