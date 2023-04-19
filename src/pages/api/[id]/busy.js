import { createRouter } from "next-connect";

const router = createRouter();

router.get((req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // TODO: process from database
  const busy = "Not busy";
  const busyColor = {
    background: "#008140",
  };

  res.status(200).json({ busy, busyColor });
});

router.post((req, res) => {
  // TODO: process from database
  const { busyness } = req.body; // eslint-disable-line no-unused-vars
  res.status(202).json({
    message: "Updated",
  });
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
