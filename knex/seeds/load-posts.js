/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const fs = require("fs");

exports.seed = async function (knex) {
  const postsRaw = fs.readFileSync("src/data/sample-post-data.json");
  const posts = JSON.parse(postsRaw);
  // Deletes ALL existing entries
  await knex("Post").del();
  await knex("Post").insert(posts);

  const repliesRaw = fs.readFileSync("src/data/sample-reply-data.json");
  const replies = JSON.parse(repliesRaw);
  // Deletes ALL existing entries
  await knex("Replies").del();
  await knex("Replies").insert(replies);

  const postreplyRase = fs.readFileSync("src/data/sample-postreply-data.json");
  const postreply = JSON.parse(postreplyRase);
  // Deletes ALL existing entries
  await knex("PostReplies").del();
  await knex("PostReplies").insert(postreply);
};
