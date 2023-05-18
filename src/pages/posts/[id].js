import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, Container, Stack } from "@mui/material";
import RepliesView from "@/components/RepliesView";

export default function SinglePostPage({}) {
  const router = useRouter();

  const { id } = router.query;

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

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
      <main>
        <Container maxWidth="xl">
          <Stack direction="column" justifyContent="center" alignItems="center">
            {post ? (
              <>
                <Typography component="h5" variant="h5">
                  {post.subject}
                </Typography>
                <Typography component="p" variant="p">
                  {post.contents}
                </Typography>
                {post.id ? <RepliesView id={post.id} /> : <p>Loading...</p>}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </Stack>
        </Container>
      </main>
    </div>
  );
}
