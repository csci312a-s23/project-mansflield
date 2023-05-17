import { knex } from "../../knex/knex.js";
import { manipulateDate } from "@/utils/manipulateDate";

// const BASEVAL = 2;
const BASEVAL = Math.floor(Math.random() * 5);
const WEIGHT = 0.5;

export const findBusyness = async (place, meal, type, date) => {
  const dateQuery = manipulateDate(date);
  const busyDB = await knex("busyness")
    .where({
      place: place,
      meal: meal,
      type: type,
      dateStr: dateQuery.format("YYYY-MM-DD"),
    })
    .avg("busyness as busyVal")
    .first();

  const busy = busyDB.busyVal || BASEVAL;
  const weighed = (BASEVAL + busy * WEIGHT) / (WEIGHT + 1);

  return Math.round(weighed);
};
