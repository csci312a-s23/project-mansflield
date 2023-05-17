import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  const posts = await knex("Post").select();
  posts.forEach(async (post) => {
    const replyIds = await knex("PostReplies")
      .select()
      .where({ postId: post.id });
    console.log(replyIds);
    //forEach to get the replies connected
  });

  res.status(200).json(posts);
});

router.post(async (req, res) => {
  const { id, ...posts } = req.body;
  const [insertedId] = await knex("Post").insert(post);
  res.status(200).json({ ...posts, id: insertedId });
});

export default router.handler({
  onError(err, req, res) {
    res.status(400).json({
      error: err.message,
    });
  },
});
