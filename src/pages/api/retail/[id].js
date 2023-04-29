import { createRouter } from "next-connect";

import dayjs from "dayjs";

import retail from "@/data/retail.json";

const testBusy = {
  busy: "Very busy",
  busyVal: 3,
  menu: [],
};

const closed = {
  busy: "Closed",
  busyVal: -1,
  menu: [],
};

const router = createRouter();

router.get((req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // Is it open?
  const time = dayjs(t);
  const store = retail.find((h) => {
    return h.id === id;
  });
  const isOpen = store.schedule.some(
    (s) =>
      s.day === time.day() &&
      parseInt(time.format("HHmm"), 10) >= s.open &&
      parseInt(time.format("HHmm"), 10) < s.close
  );

  if (store.has_menu) {
    // TODO: Get menu
  }

  if (isOpen) {
    // TODO: process from database
    res.status(200).json(testBusy);
  } else {
    res.status(200).json(closed);
  }
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
