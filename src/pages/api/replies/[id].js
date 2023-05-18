import { knex } from "../../../../knex/knex";
import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
  const { id } = req.query;
  const replies = await knex("replies").where({ post_id: id }).select();
  res.status(200).json(replies);
});

router.post(async (req, res) => {
  const { id } = req.query;
  const { subject, contents, user } = req.body;

  const reply = {
    subject,
    contents,
    user,
    post_id: id,
  };

  const replyId = await knex("replies").insert(reply);
  const createdReply = await knex("replies").where({ id: replyId }).first();

  res.status(201).json(createdReply);
});

router.put(async (req, res) => {
  const { id } = req.query;
  const { subject, contents, user } = req.body;
  await knex("replies").where({ id }).update({ subject, contents, user });

  const reply = await knex("replies").where({ id }).first();
  res.status(200).json(reply);
});

router.delete(async (req, res) => {
  const { id } = req.query;
  const reply = await knex("replies").where({ id }).first();

  if (!reply) {
    return res.status(404).json({ message: "Reply not found" });
  }

  await knex("replies").where({ id }).delete();
  res.status(204).json({ message: "Reply deleted successfully" });
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
