const db = require('../../data/db-config');

module.exports = {
  getResources,
  getResourceById,
  addResource,
};

function getResources(project_id) {
  return db('resources as r')
    .join('project_resources as pr', 'pr.resources_id', 'r.id')
    .join('projects as p', 'pr.projects_id', 'p.id')
    .where('p.id', project_id)
    .select();
}

function getResourceById(id) {
  return db('resources as r')
    .where('r.id', id)
    .join('project_resources as pr', 'pr.resources_id', 'r.id')
    .join('projects as p', 'pr.projects_id', 'p.id')
    .select(
      'p.project_name',
      'p.project_description',
      'p.project_completed',
      'r.resource_name',
      'r.resource_description'
    )
    .first();
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);

  return getResourcesById(id);
}
