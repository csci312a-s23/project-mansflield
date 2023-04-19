import { createRouter } from "next-connect";

const router = createRouter();

router.get((req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // TODO: process from database
  const menu = [
    {
      key: "maple-glazed-salmon",
      hall: "proctor",
      name: "Maple Glazed Salmon",
      description:
        "A sweet and savory glaze, made with Dijon mustard, soy sauce, garlic, and maple syrup.",
      rating: "3.2",
    },
    {
      key: "clam-chowder",
      hall: "proctor",
      name: "New England Clam Chowder",
      description:
        "This cravilicious white creamy clam chowder is bursting with delectable clams, tender potatoes, and salty bacon.",
      rating: "5.0",
    },
  ];

  res.status(200).json({ menu });
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
