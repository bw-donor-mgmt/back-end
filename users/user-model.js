//knex configuration
const knex = require('../data/db-config.js'); 

//find organization by name and is case insensitive
const findOrg = org => knex('organizations').whereRaw('LOWER(name) LIKE ?', '%'+org.toLowerCase()+'%');

//add user to database to signup
const addUser = user => knex('users').insert(user)

//finds user in database for login
const findUser = user => knex('users').where(user); 

//finds user by id
const findUserById = id => knex('id', 'username', 'organization_id').from('users').where({id})

//updates user in the database by user id
const updateUser = (id, changes) => knex('users').where({id}).update(changes).returning('id')

//deletes users; cannot be undone
const deleteUser = id => knex('users').where({id}).delete();


module.exports = { findOrg, addUser, findUser, updateUser, deleteUser, findUserById}