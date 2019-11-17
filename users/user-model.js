const knex = require('../data/db-config.js'); 



const findOrg = org => {
    return knex('organizations').whereRaw('LOWER(name) LIKE ?', '%'+org.toLowerCase()+'%');
}
    

const add = user => {
    return knex('users').insert(user)
}

module.exports = { findOrg, add}