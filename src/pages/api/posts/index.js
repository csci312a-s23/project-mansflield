import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";

const router = createRouter();

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
