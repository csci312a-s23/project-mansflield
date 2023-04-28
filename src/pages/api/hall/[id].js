import { createRouter } from "next-connect";

const router = createRouter();

import example from "@/data/test-data.json";

router.get((req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // TODO: process from database

  res.status(200).json(example);
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
