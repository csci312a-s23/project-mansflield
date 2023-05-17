import { createRouter } from "next-connect";
import { knex } from "../../../../knex/knex.js";
import dayjs from "dayjs";

import halls from "@/data/halls.json";
import { findOpenMenu } from "@/utils/findOpenMenu";
import { findBusyness } from "@/utils/findBusyness";
import { getMenu } from "@/utils/getMenu";
import { formatBusyValue } from "@/utils/formatBusyValue";
import { formatTableValue } from "@/utils/formatTableValue";

const closed = {
  busy: "Closed",
  busyVal: -1,
  tables: "Check back later",
  tablesVal: -1,
  menu: [],
};

const router = createRouter();

router.get(async (req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // Is it open?
  // const time = dayjs(t);
  const time = dayjs("2023-05-15T23:40:15.000Z");
  const hall = halls.find((h) => {
    return h.id === id;
  });
  const menu = findOpenMenu(hall, time);

  if (menu) {
    // Get values from backend
    const busyVal = await findBusyness(
      hall.id,
      menu.id,
      "line",
      time.format("YYYY-MM-DD")
    );
    const tablesVal = await findBusyness(
      hall.id,
      menu.id,
      "table",
      time.format("YYYY-MM-DD")
    );
    const menuInfo = await getMenu(
      hall.menu_id,
      menu.id,
      time.format("YYYY-MM-DD")
    );

    const info = {
      busy: formatBusyValue(busyVal),
      busyVal: busyVal,
      tables: formatTableValue(tablesVal),
      tablesVal: tablesVal,
      menu: menuInfo.items,
    };

    res.status(200).json(info);
  } else {
    res.status(200).json(closed);
  }
});

router.post(async (req, res) => {
  const { id, t, type, val } = req.body; // eslint-disable-line no-unused-vars

  // Is it open?
  // const time = dayjs(t);
  const time = dayjs("2023-05-15T23:40:15.000Z");
  const hall = halls.find((h) => {
    return h.id === id;
  });
  const menu = findOpenMenu(hall, time);

  // validate
  if (type !== "line" && type !== "table") {
    throw new Error("Invalid type value. Must be 'line' or 'table'.");
  }

  if (val < 0 || val > 4) {
    throw new Error("Invalid busyness value. Must be between 0 and 4.");
  }

  const newBusyness = await knex("busyness").insert({
    place: hall.id,
    meal: menu.id,
    dateStr: time.format("YYYY-MM-DD"),
    type: type,
    busyness: val,
  });

  // Respond with the newly created busyness data
  res.status(201).json({
    message: "Busyness for dining created successfully",
    busyness: newBusyness,
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
