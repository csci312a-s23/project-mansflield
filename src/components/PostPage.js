/*
This will be the page that actually displays the posts
There will be a separate file that creates the posts and posts them to the database similar to simplepeida creator
*/
//import { useState } from "react";
import Post from "./Post";

export default function PostPage(posts, setPosts) {
  // fetch data from api
  fetch("/api/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data));

  const postComponents = posts.map((item) => {
    return (
      <Post
        key={item.id}
        subject={item.subject}
        contents={item.contents}
        owner={item.owner}
      />
    );
  });
  return (
    <div>
      {postComponents}
      <button onClick={() => CreatePost()}>+</button>
    </div>
  );
}
