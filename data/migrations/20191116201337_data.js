
exports.up = function(knex) {
  return knex.schema

    .createTable('users', table => {
        table.increments('id'); 
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        table.string('role', 255).notNullable();

    })
    
    
    .createTable('organizations', table => {
        table.increments('id'); 
        table.string('name', 255).notNullable(); 
        table.string('mission', 500); 
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE'); 
    })

    .createTable('campaigns', table => {
        table.increments('id')
        table.string('name', 255).notNullable(); 
        table.decimal('goal', 8, 2)
        table.decimal('raised', 8, 2)
        table
            .integer('organization_id')
            .unsigned()
            .references('id')
            .inTable('organizations')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

    })
    .createTable('donors', table => {
        table.increments('id')
        table.string('name', 255).notNullable();
        table.string('phone', 155);
        table.string('email', 500);
        table.string('contacted_on', 500);
        table.string('method', 500);
    })
    .createTable('donations', table => {
        table.increments('id')
        table.decimal('amount', 8, 2).notNullable(); 
        table.string('date', 500)
        table
            .integer('campaign_id')
            .unsigned()
            .references('id')
            .inTable('campaigns')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        table
            .integer('donor_id')
            .unsigned()
            .references('id')
            .inTable('donors')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')    


    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('donations')
    .dropTableIfExists('donors')
    .dropTableIfExists('campaigns')
    .dropTableIfExists('organizations')
    .dropTableIfExists('users')
};
