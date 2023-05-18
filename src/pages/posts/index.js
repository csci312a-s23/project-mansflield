/*
This is the page that actually displays the posts
There is a separate file that creates the posts and posts them to the database similar to simplepeida creator
*/
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostsView from "@/components/PostsView";
import {
  Box,
  Typography,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Container,
  Stack,
} from "@mui/material";
import PostAdd from "@mui/icons-material/PostAdd";

export default function PostPage({}) {
  const router = useRouter();
  const [posts, setPosts] = useState();

  function routeCreate() {
    router.push(`/posts/new`);
  }

  useEffect(() => {
    // fetch data from api
    if (!posts) {
      fetch("/api/posts")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
        });
    }
  });

  return (
    <>
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
      <main>
        <Container maxWidth="xl">
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <PostsView posts={posts} />

            <ListItemButton onClick={() => routeCreate()}>
              <ListItemAvatar>
                <Avatar>
                  <PostAdd />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Add a Post!</ListItemText>
            </ListItemButton>
          </Stack>
        </Container>
      </main>
    </>
  );
}
