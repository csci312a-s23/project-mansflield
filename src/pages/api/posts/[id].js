import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  const { id } = req.query;
  const post = await knex("posts").where({ id: +id }).first();
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(post);
});

router.put(async (req, res) => {
  const { id } = req.query;
  const { subject, contents, user } = req.body;
  await knex("posts").where({ id }).update({ subject, contents, user });

  const post = await knex("posts").where({ id }).first();
  res.status(200).json(post);
});

router.get(async (req, res) => {
  const posts = await knex("posts").select();
  res.status(200).json(posts);
});

router.post(async (req, res) => {
  const { subject, contents, user } = req.body;
  const [postId] = await knex("posts").insert({ subject, contents, user });

  const post = await knex("posts").where({ id: postId }).first();

  res.status(201).json(post);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.query;
  const [post] = await knex("posts").where({ id }).first();

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  await knex("posts").where({ id }).delete();
  res.status(204).json({ message: "Post deleted successfully" });
});

router.all((req, res) => {
  res.status(405).json({
    error: "Method not allowed",
  });
});

export default router.handler({
  onError(err, req, res) {
    res.status(400).json({
      error: err.message,
    });
  },
});
