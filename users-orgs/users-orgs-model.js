const knex = require('../data/db-config.js'); 

//add
const add = (entry) => knex('users-orgs').insert(entry).returning(); 

//get by user_id
const getOrgsByUserId = id => knex('users-orgs').where('user_id', '=', `${id}`).returning(); 

module.exports = {add, getOrgsByUserId}; 