const db = require('../../data/db-config');

module.exports = {
  addTasks,
  getTasks,
};

async function addTasks(task) {
  const [id] = await db('tasks').insert(task);
  return db('tasks')
    .where({ id })
    .first();
}

async function getTasks() {
  const data = await db('tasks as t')
    .join('projects as p', 't.projects_id', 'p.id')
    .select(
      'p.project_name',
      'p.project_description',
      't.task_description',
      't.task_note',
      't.task_completed'
    );
  return data.map(task => {
    return {
      ...task,
      task_completed: task.task_completed === 1 ? true : false,
    };
  });
}
