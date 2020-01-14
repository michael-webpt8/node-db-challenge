exports.seed = async function(knex) {
  await knex('projects').insert([
    {
      project_name: 'world domination',
      project_description: 'domination of the world',
      project_completed: true,
    },
    { project_name: 'step1, step 2, step 3 profit', project_completed: false },
    { project_name: 'oceans 111', project_completed: true },
  ]);
};
