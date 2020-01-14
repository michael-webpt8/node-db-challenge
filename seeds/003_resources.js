exports.seed = async function(knex) {
  await knex('resources').insert([
    {
      resource_name: 'a resource',
      resource_description: 'something descriptive',
    },
    {
      resource_name: 'a resource for 2',
      resource_description: 'something descriptive again',
    },
    {
      resource_name: 'a 111 resource',
      resource_description: 'something descriptive 111',
    },
  ]);
};
