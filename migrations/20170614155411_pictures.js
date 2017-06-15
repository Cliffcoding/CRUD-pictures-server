
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pictures', (table) => {
    table.increments();
    table.text("url").notNullable();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pictures')
};
