/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("service").del();
  await knex("service").insert([
    {
      id: 998244353,
      place: "grille",
      dateStr: "2023-05-15",
      busyness: 2,
    },
    {
      id: 1597463007,
      place: "wilson",
      dateStr: "2023-05-15",
      busyness: 3,
    },
    {
      id: 1061109567,
      place: "crossroads",
      dateStr: "2023-05-15",
      busyness: 0,
    },
  ]);
};
