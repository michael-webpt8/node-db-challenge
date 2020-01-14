const db = require('../../data/db-config');

module.exports = {
  getProjects,
  addProject,
};

async function getProjects() {
  const projects = db('projects').select();
  return projects.map(project => {
    return {
      ...project,
      project_completed: project.project_completed === 1 ? true : false,
    };
  });
}

async function addProject(data) {
  const [id] = await db('projects').insert(data);
  return db('projects')
    .where({ id })
    .select()
    .first();
}
