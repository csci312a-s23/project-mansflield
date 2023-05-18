import { useState, useEffect } from "react";
import { TextField, Stack, Button, Container } from "@mui/material";

export default function PostCreator({ finished }) {
  const [subject, setSubject] = useState();
  const [contents, setContents] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setSubject(subject);
    setContents(contents);
    setUser(user);
  }, [subject, contents, user]);

  return (
    <Container maxWidth="lg">
      <Stack direction="column" justifyContent="center" alignItems="center">
        <TextField
          label="Subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contents"
          name="contents"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Username"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Stack spacing={2} direction="row">
          <Button
            type="submit"
            onClick={() => finished({ subject, contents, user })}
            disabled={!subject || !contents || !user}
          >
            Post
          </Button>
          <Button type="reset" onClick={finished}>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
