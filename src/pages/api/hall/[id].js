import { createRouter } from "next-connect";

import dayjs from "dayjs";

import halls from "@/data/halls.json";
import { findOpenMenu } from "@/utils/findOpenMenu";

import proctor from "@/data/test-proctor.json";
import ross from "@/data/test-ross.json";
import atwater from "@/data/test-atwater.json";

const closed = {
  busy: "Closed",
  busyVal: -1,
  tables: "Check back later",
  tablesVal: -1,
  menu: [],
};

const router = createRouter();

router.get((req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // Is it open?
  const time = dayjs(t);
  const hall = halls.find((h) => {
    return h.id === id;
  });
  const menu = findOpenMenu(hall, time);

  if (menu) {
    // TODO: process from database

    let example = proctor;

    if (id === "ross") {
      example = ross;
    }

    if (id === "atwater") {
      example = atwater;
    }

    res.status(200).json(example);
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
