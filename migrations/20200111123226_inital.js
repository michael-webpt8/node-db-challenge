exports.up = async function(knex) {
  await knex.schema.createTable('projects', table => {
    table.increments('id');
    table
      .string('project_name', 160)
      .notNullable()
      .unique();
    table.text('project_description');
    table
      .boolean('project_completed')
      .notNullable()
      .defaultTo(false);
  });

  await knex.schema.createTable('tasks', table => {
    table.increments('id');
    table.string('task_description', 250).notNullable();
    table.text('task_note');
    table
      .boolean('task_completed')
      .notNullable()
      .defaultTo(false);
    table
      .integer('projects_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects');
  });

  await knex.schema.createTable('resources', table => {
    table.increments('id');
    table
      .string('resource_name')
      .notNullable()
      .unique();
    table.text('resource_description');
  });

  await knex.schema.createTable('project_resources', table => {
    table
      .integer('projects_id')
      .unsigned()
      .references('id')
      .inTable('projects');
    table
      .integer('resources_id')
      .unsigned()
      .references('id')
      .inTable('resources');
    table.primary(['projects_id', 'resources_id']);
  });
};
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects_resources');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('projects');
};
