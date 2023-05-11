exports.up = function (knex) {
  return knex.schema.createTable("Post", (table) => {
    table.increments("id").primary();
    table.string("subject");
    table.text("contents");
    table.string("owner");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Post");
};
