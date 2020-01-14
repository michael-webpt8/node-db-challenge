const db = require('../../data/db-config');

module.exports = {
  getProjects,
  addProject,
};

function getProjects() {
  return db('projects').select();
}

async function addProject(data) {
  const [id] = await db('projects').insert(data);
  return db('projects')
    .where({ id })
    .select()
    .first();
}
