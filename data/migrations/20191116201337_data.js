//used to create tables using knex.js
//all tables will be created in data.db3 to make up database

exports.up = function(knex) {
  return knex.schema
 
  .createTable('organizations', table => {
    table.increments(); 
    table.string('name', 255).notNullable(); 
    table.string('mission', 500); 
    })

    .createTable('users', table => {
        table.increments(); 
        table
            .string('username', 255)
            .unique()
            .notNullable();
        table
            .string('email', 255)
            .unique()
            .notNullable();
        table
            .string('password', 255)
            .notNullable();
        //one organization can multiple board members
       
    })

    .createTable('users-orgs', table => {
        table.increments(); 
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        table
            .integer('organization_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('organizations')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        table
            .unique(['user_id', 'organization_id'])
    })
    

    .createTable('campaigns', table => {
        table.increments()
        table.string('name', 255).notNullable(); 
        table.string('description', 500)
        table.decimal('goal', 8, 2)
        table.decimal('raised', 8, 2)
        table.string('image', 500).defaultTo('https://upload.wikimedia.org/wikipedia/commons/6/62/%22No_Image%22_placeholder.png')

        //one organization can have multiple campaigns
        table
            .integer('organization_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('organizations')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

    })
    .createTable('donors', table => {
        table.increments()
        table.string('name', 255).notNullable();
        table.string('phone', 155);
        table.string('email', 500);
        table.string('contacted_on', 500);
        table.string('method', 500);
    })

    
    .createTable('donations', table => {
        table.increments()
        table.decimal('amount', 8, 2).notNullable(); 
        table.string('date', 500)
        //multiple donations can be made to one campaign
        table
            .integer('campaign_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('campaigns')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        //one donor can make multiple donations
        table
            .integer('donor_id')
            .notNullable()
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
    .dropTableIfExists('users-orgs')
    .dropTableIfExists('users')
    .dropTableIfExists('organizations')
    
};



