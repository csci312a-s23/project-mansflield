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
