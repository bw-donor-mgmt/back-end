const knex = require('../data/db-config.js'); 



//find organization by name and is case insensitive
const findOrg = org => knex('organizations').whereRaw('LOWER(name) LIKE ?', '%'+org.toLowerCase()+'%');

//add user to database to signup
const add = user => knex('users').insert(user)

//finds user in database for login
const find = user => knex('users').where(user); 

module.exports = { findOrg, add, find}