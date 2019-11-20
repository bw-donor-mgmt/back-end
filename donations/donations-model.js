const knex = require('../data/db-config.js'); 

//add donation
const addDonation = donation => knex('donations').insert(donation)

//add donation for specific donor
const addDonationByDonor = (donation, donor_id) => knex('donations').insert({...donation, donor_id: donor_id}).returning('id'); 
//update donation
const updateDonation = (id, changes) => knex('donations').where({id}).update(changes).returning('id')

//get donation by id 
const getDonationById = id => knex('donations').where({id});

//get donations by campaign id
const getDonationsByCampId = campaign_id => knex('donations').where({campaign_id});

//get all donations
const getDonations = () => knex('donations')
//delete donation
const deleteDonation = id => knex('donations').where({id}).delete().returning('id');

//get all donations to a campaign 
const donationsTo = campagin_id => knex('donations').where({campagin_id}); 

//get all donations made by a donor 
const donationsBy = donor_id => knex('donations').where({donor_id}); 

module.exports = {addDonation, getDonations, getDonationsByCampId, getDonationById, addDonationByDonor, updateDonation, getDonationById, deleteDonation, donationsTo, donationsBy}