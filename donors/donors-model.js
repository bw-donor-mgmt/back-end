const knex = require('../data/db-config.js'); 

//all donors
const getDonors = () => knex('donors')
//add a donor
const addDonor = donor => knex('donors').insert(donor)

//get donor by id
const findDonorById = id => knex('donors').where({id});

//update donor
const updateDonor = (id, changes) => knex('donors').where('id', id).update(changes);

//delete donor
const deleteDonor = id => knex('donors').where({id}); 


module.exports = {getDonors, addDonor, findDonorById, updateDonor, deleteDonor}