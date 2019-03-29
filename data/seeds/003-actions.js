
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').insert([
    {project_id: 1, description: 'step 1', notes: 'do this', action_complete: false },
    {project_id: 1, description: 'step 2', notes: 'then this', action_complete: false },
    {project_id: 1, description: 'step 3', notes: 'then that', action_complete: false },

    {project_id: 2, description: 'step 1', notes: 'do this', action_complete: false },
    {project_id: 2, description: 'step 2', notes: 'then this', action_complete: false },
    {project_id: 2, description: 'step 3', notes: 'then that', action_complete: false },

    {project_id: 3, description: 'step 1', notes: 'do this', action_complete: false },
    {project_id: 3, description: 'step 2', notes: 'then this', action_complete: false },
    {project_id: 3, description: 'step 3', notes: 'then that', action_complete: false },
  ]);
};
