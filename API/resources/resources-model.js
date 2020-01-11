const db = require('../../data/db-config');

module.exports = {
  getResources,
};

function getResources(project_id) {
  return db('resources as r')
    .join('projects as p', 'r.projects_id', 'p.id')
    .where('p.id', project_id)
    .select();
}
