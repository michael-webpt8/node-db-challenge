exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').truncate();
  await knex('resources').truncate();
  await knex('projects').truncate();
};
