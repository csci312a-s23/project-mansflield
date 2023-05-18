/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("busyness").del();
  await knex("busyness").insert([
    {
      id: 998244353,
      place: "proctor",
      meal: "breakfast",
      dateStr: "2023-05-15",
      type: "line",
      busyness: 2,
    },
    {
      id: 1597463007,
      place: "ross",
      meal: "breakfast",
      dateStr: "2023-05-15",
      type: "table",
      busyness: 3,
    },
    {
      id: 1061109567,
      place: "atwater",
      meal: "lunch",
      dateStr: "2023-05-15",
      type: "line",
      busyness: 0,
    },
  ]);
};
