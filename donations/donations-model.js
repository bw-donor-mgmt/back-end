const knex = require('../data/db-config.js'); 

//add donation
const addDonation = donation => knex('donations').insert(donation)

//update donation
const updateDonation = (id, changes) => knex('donations').where({id}).update({...changes})

//get donation by id 
const getDonationById = id => knex('donations').where({id}).first()

//delete donation
const deleteDonation = id => knex('donations').where({id}).delete()



module.exports = {addDonation, updateDonation, getDonationById, deleteDonation}