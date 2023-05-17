import { knex } from "../../knex/knex.js";

const BASEVAL = 2;
const WEIGHT = 0.5;

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

  const busy = busyDB.busyVal || BASEVAL;
  const weighed = (BASEVAL + busy * WEIGHT) / (WEIGHT + 1);

  return Math.round(weighed);
};
