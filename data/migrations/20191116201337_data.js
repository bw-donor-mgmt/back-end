//used to create tables using knex.js
//all tables will be created in data.db3 to make up database

exports.up = function(knex) {
  return knex.schema
 
  .createTable('organizations', table => {
    table.increments('id'); 
    table.string('name', 255).notNullable(); 
    table.string('mission', 500); 
    })

    .createTable('users', table => {
        table.increments('id'); 
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        //one organization can multiple board members
        table
            .integer('organization_id')
            .unsigned()
            .references('id')
            .inTable('organizations')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })
    

    .createTable('campaigns', table => {
        table.increments('id')
        table.string('name', 255).notNullable(); 
        table.decimal('goal', 8, 2)
        table.decimal('raised', 8, 2)
        //one organization can have multiple campaigns
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
        //multiple donations can be made to one campaign
        table
            .integer('campaign_id')
            .unsigned()
            .references('id')
            .inTable('campaigns')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        //one donor can make multiple donations
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
    .dropTableIfExists('users')
    .dropTableIfExists('organizations')
    
};

//did not use seeds since database will be populated by users