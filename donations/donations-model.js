const knex = require('../data/db-config.js'); 

//add donation
const addDonation = donation => knex('donations').insert(donation)

//update donation
const updateDonation = (id, changes) => knex('donations').where({id}).update({...changes})

//get donation by id 
const getDonationById = id => knex('donations').where({id}).first(); 

//delete donation
const deleteDonation = id => knex('donations').where({id}).delete();

//get all donations to a campaign 
const donationsTo = campagin_id => knex('donations').where({campagin_id}); 

//get all donations made by a donor 
const donationsBy = donor_id => knex('donations').where({donor_id}); 

module.exports = {addDonation, updateDonation, getDonationById, deleteDonation, donationsTo, donationsBy}