
exports.up = function(knex, Promise) {
  return knex.schema.createTable('likes', (table) => {
    table.increments();
    table.integer('picture_id').unsigned().references('id').inTable('pictures').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('likes')
};
