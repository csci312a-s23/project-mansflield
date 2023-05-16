/*
This will make the button that will take you to the posts page
*/
//import { useState } from "react";

export default function PostButton({ routePosts }) {
  return <button onClick={() => routePosts()}> Make a Post! </button>;
}
