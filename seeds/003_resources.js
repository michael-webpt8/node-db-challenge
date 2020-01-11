exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      resource_name: 'a resource',
      resource_description: 'something descriptive',
      projects_id: 1,
    },
    {
      resource_name: 'a resource for 2',
      resource_description: 'something descriptive again',
      projects_id: 2,
    },
    {
      resource_name: 'a 111 resource',
      resource_description: 'something descriptive 111',
      projects_id: 3,
    },
  ]);
};
