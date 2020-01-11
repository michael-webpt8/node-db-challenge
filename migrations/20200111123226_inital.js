exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {});

  await knex.schema.createTable('resources', table => {});

  await knex.schema.createTable('tasks', table => {});
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('projects');
};
