/*
This function is formatting the posts
Still working on Back End
*/
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Post({ subject, contents, owner, replies }) {
  const [shouldShowReplyEdit, setShouldShowReplyEdit] = useState(false);

  const replyEdit = shouldShowReplyEdit ? (
    <div>
      <p>hi</p>
    </div>
  ) : null;

  return (
    <div>
      <Card sx={{ minWidth: 20 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {subject}
          </Typography>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {contents}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {owner}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => setShouldShowReplyEdit(!shouldShowReplyEdit)}
          >
            {" "}
            Reply{" "}
          </Button>
        </CardActions>
      </Card>
      {replyEdit}
      <div>
        <p>{replies}</p>
      </div>
    </div>
  );
}
