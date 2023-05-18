/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const fs = require("fs");

exports.seed = async function (knex) {
  const postsRaw = fs.readFileSync("src/data/posts/sample-post-data.json");
  const posts = JSON.parse(postsRaw);
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert(posts);

  const repliesRaw = fs.readFileSync("src/data/posts/sample-reply-data.json");
  const replies = JSON.parse(repliesRaw);
  // Deletes ALL existing entries
  await knex("replies").del();
  await knex("replies").insert(replies);
};
