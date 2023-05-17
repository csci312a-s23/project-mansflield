import { createRouter } from "next-connect";
// import { knex } from "../../../../knex/knex.js";
import dayjs from "dayjs";

import retail from "@/data/retail.json";
import { findService } from "@/utils/findService";
import { getMenu } from "@/utils/getMenu";
import { formatBusyValue } from "@/utils/formatBusyValue";

const closed = {
  busy: "Closed",
  busyVal: -1,
  menu: [],
};

const router = createRouter();

router.get(async (req, res) => {
  const { id, t } = req.query; // eslint-disable-line no-unused-vars

  // Is it open?
  // const time = dayjs(t);
  const time = dayjs("2023-05-15T15:40:15.000Z");
  const store = retail.find((h) => {
    return h.id === id;
  });
  const isOpen = store.schedule.some(
    (s) =>
      s.day === time.day() &&
      parseInt(time.format("HHmm"), 10) >= s.open &&
      parseInt(time.format("HHmm"), 10) < s.close
  );

  const menuInfo = store.has_menu
    ? await getMenu(store.menu_id, store.menus[0].id, time.format("YYYY-MM-DD"))
    : [];

  if (isOpen) {
    const busyVal = await findService(store.id, time.format("YYYY-MM-DD"));
    const info = {
      busy: formatBusyValue(busyVal),
      busyVal: busyVal,
      menu: menuInfo.items,
    };
    res.status(200).json(info);
  } else {
    res.status(200).json(closed);
  }
});

router.post(async (req, res) => {
  const { id, t, val } = req.body; // eslint-disable-line no-unused-vars

  // Is it open?
  // const time = dayjs(t);
  const time = dayjs("2023-05-15T23:40:15.000Z");
  const hall = retail.find((h) => {
    return h.id === id;
  });

  // validate

  if (val < 0 || val > 4) {
    throw new Error("Invalid busyness value. Must be between 0 and 4.");
  }

  const newBusyness = await knex("service").insert({
    place: hall.id,
    dateStr: time.format("YYYY-MM-DD"),
    busyness: val,
  });

  // Respond with the newly created busyness data
  res.status(201).json({
    message: "Busyness for retail created successfully",
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
