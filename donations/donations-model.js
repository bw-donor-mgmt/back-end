const knex = require('../data/db-config.js'); 

//add donation
const addDonation = donation => knex('donations').insert(donation)
//update donation

const updateDonation = id => knex('donations').
//get donation by id 

//delete donation

//get last contact date by id
module.exports = {}