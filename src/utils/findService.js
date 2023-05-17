import { knex } from "../../knex/knex.js";

// const BASEVAL = 2;
const BASEVAL = Math.floor(Math.random() * 5);
const WEIGHT = 0.5;

export const findService = async (place, date) => {
  const serviceDB = await knex("service")
    .where({
      place: place,
      dateStr: date,
    })
    .avg("busyness as busyVal")
    .first();

  const busy = serviceDB.busyVal || BASEVAL;
  const weighed = (BASEVAL + busy * WEIGHT) / (WEIGHT + 1);

  return Math.round(weighed);
};
