const knex = require('../data/db-config.js');

//get all organizations
const getAllOrgs = () => knex('organizations');
//add
const addOrg = organization => knex('organizations').insert(organization)

//find by name
const findOrgByName = name => knex('organizations').whereRaw('LOWER(name) LIKE ?', '%'+name.toLowerCase()+'%');

//get org information
const findOrgById = id => knex('organizations').where('id', '=',`${id}`)

//update

const updateOrg = (id, changes) => knex('organizations').where({id}).update(changes)
//delete

const deleteOrg = id => knex('organizations').where({id}).delete()

module.exports = { getAllOrgs, addOrg, findOrgByName, findOrgById, updateOrg, deleteOrg}