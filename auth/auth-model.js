const knex = require('../data/db-config.js'); 

const add = user => {
    let {username, password, organization} = user; 
    
    organization = knex('organizations').whereRaw('LOWER(name) LIKE ?', '%'+organization.toLowerCase()+'%');
    
    if (organization){
        organization = organization.id
    }

    knex('users').insert({name : username, password: password, organization_id : organization})
}