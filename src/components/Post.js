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

export default function Post({ subject, contents, owner }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {subject}
        </Typography>
        <Typography variant="h5" component="div">
          {contents}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {owner}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => CreateReply()}>
          {" "}
          Reply{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
