/*
  PostView.js

  This component provides the posts in /posts. 
*/
import { Stack, Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/router";
import dayjs from "dayjs";
const localizedFormat = require("dayjs/plugin/localizedFormat");
// import { useState } from "react";

dayjs.extend(localizedFormat);

export default function PostsView({ posts = [] }) {
  const router = useRouter();

  const routeReply = (id) => {
    router.push(`/posts/${id}`);
  };

  return (
    <Stack direction="column" spacing={1}>
      {posts ? (
        posts.map((post) => (
          <Card key={post.id}>
            <CardContent
              onClick={() => routeReply(post.id)}
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h5" component="h2" gutterBottom>
                {post.subject}
              </Typography>
              <Typography color="textSecondary">
                {`${post.user} - ${dayjs(post.created_at).format("L LT")}`}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {post.contents}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Stack>
  );
}
