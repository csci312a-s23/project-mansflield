exports.up = function (knex) {
  return knex.schema
    .createTable("posts", (table) => {
      table.increments("id").primary();
      table.string("subject").notNullable();
      table.text("contents").notNullable();
      table.string("user").notNullable();
      table.timestamps(true, true);
    })
    .createTable("replies", (table) => {
      table.increments("id").primary();
      table.string("user").notNullable();
      table.text("contents").notNullable();
      table.integer("post_id").unsigned().notNullable();
      table
        .foreign("post_id")
        .references("id")
        .inTable("posts")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posts").dropTableIfExists("replies");
};
