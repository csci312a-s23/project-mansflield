import { knex } from "../../knex/knex.js";

export const findBusyness = async (place, meal, type, date) => {
  const busyDB = await knex("busyness")
    .where({
      place: place,
      meal: meal,
      type: type,
      dateStr: date,
    })
    .avg("busyness as busyVal")
    .first();

  const defaultBusy = 2;
  const busy = busyDB.busyVal || defaultBusy;

  return busy;
};
