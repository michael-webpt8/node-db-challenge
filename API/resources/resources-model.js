const db = require('../../data/db-config');

module.exports = {
  getResources,
  getResourceById,
  addResource,
};

function getResources(project_id) {
  return db('resources as r')
    .join('projects as p', 'r.projects_id', 'p.id')
    .where('p.id', project_id)
    .select();
}

function getResourceById(id) {
  return db('resources as r')
    .where({ id })
    .join('projects as p', 'r.projects_id', 'p.id')
    .select()
    .first();
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);

  return getResourcesById(id);
}
