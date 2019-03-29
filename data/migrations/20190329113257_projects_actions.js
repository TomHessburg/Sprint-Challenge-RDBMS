
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects',tbl => {
        tbl.increments();

        tbl
          .string('name', 128)
          .notNullable()
          .unique();

        tbl
          .string('description', 280)
          .notNullable();

        tbl
          .boolean('project_complete')
          .notNullable();
  })
    .createTable('actions', tbl => {
        tbl.increments();

        tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE') 
          .onUpdate('CASCADE');

        tbl
          .string('description', 280)
          .notNullable();

        tbl
          .string('notes', 128)
          .notNullable();

        tbl
          .boolean('action_complete')
          .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
            .dropTableIfExists('projects')
            .dropTableIfExists('actions');
};
