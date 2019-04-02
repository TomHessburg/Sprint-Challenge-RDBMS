exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'project 1',
      description: 'the first project on the list',
      project_complete: false
    },
    {
      name: 'project 2',
      description: 'the second project on the list',
      project_complete: false
    },
    {
      name: 'project 3',
      description: 'the third project on the list',
      project_complete: false
    }
  ])
};
