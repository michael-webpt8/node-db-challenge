exports.seed = async function(knex) {
  await knex('tasks').insert([
    {
      task_description: 'task description',
      task_note: 'task note',
      task_completed: false,
      projects_id: 1,
    },
    {
      task_description: 'another task',
      task_completed: true,
      projects_id: 2,
    },
    {
      task_description: 'task for oceans 111',
      task_completed: true,
      projects_id: 3,
    },
  ]);
};
