exports.up = function (knex) {
  return knex.schema
    .createTable("Post", (table) => {
      table.increments("id").primary();
      table.string("subject");
      table.text("contents");
      table.string("owner");
    })
    .createTable("Replies", (table) => {
      table.increments("id").primary();
      table.string("owner");
      table.text("contents");
    })
    .createTable("PostReplies", (table) => {
      table.integer("postId");
      table.integer("replyId");
      table.foreign("postId").references("Post.id").onDelete("CASCADE");
      table.foreign("replyId").references("Replies.id").onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("Post")
    .dropTableIfExists("Replies")
    .dropTableIfExists("PostReplies");
};
