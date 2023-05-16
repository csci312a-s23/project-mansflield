import { createRouter } from "next-connect";
import { knex } from "../../../../knex/knex.js";
import dayjs from "dayjs";

import halls from "@/data/halls.json";
import { findOpenMenu } from "@/utils/findOpenMenu";
import { findBusyness } from "@/utils/findBusyness";
import { fetchExternalMenu } from "@/utils/fetchExternalMenu";

const getMenu = async (place, meal, dateStr) => {
  const menu =
    place === "wilson-cafe" || place === "the-grille"
      ? await knex("menudb")
          .select()
          .where({
            place: place,
            meal: meal,
          })
          .first()
      : await knex("menudb")
          .select()
          .where({
            place: place,
            date: dateStr,
            meal: meal,
          })
          .first();

  if (menu) {
    if (typeof menu.items === "string") {
      menu.items = JSON.parse(menu.items);
    }
    return menu;
  } else {
    const menuInfo = await fetchExternalMenu(dateStr, place, meal);
    return menuInfo;
  }
};

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
      busy: "Not busy",
      busyVal: busyVal,
      tables: "Many",
      tablesVal: tablesVal,
      menu: menuInfo.items,
    };

    res.status(200).json(info);
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
