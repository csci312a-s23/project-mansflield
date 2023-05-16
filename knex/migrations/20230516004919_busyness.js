/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("busyness", (table) => {
    table.increments("id").primary();
    table.string("place").notNullable();
    table.string("meal").notNullable();
    table.string("dateStr").notNullable();
    // table.integer('user').unsigned().notNullable();
    // table.foreign('user').references('users.id');
    table.enu("type", ["line", "table"]).notNullable();
    table.integer("busyness").unsigned().notNullable().defaultTo(0);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("busyness");
};
