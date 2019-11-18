const knex = require('../data/db-config.js'); 

//create campaign
const addCampaign = campaign => knex('campaigns').insert(campaign); 

//get all campaigns for organization
const getCampaignsByOrg = organization_id => knex('campaigns').where({organization_id});

//get campaign by id
const getCampaignById = id => knex('campaigns').where({id});

//get campaign by name 
const getCampaignByName = name => knex('campaigns').whereRaw('LOWER(name) LIKE ?', '%'+name.toLowerCase()+'%');

//update campaign
const updateCampaign = (id, changes) => knex('campaigns').where({id}).update(changes)

//delete campaign
const deleteCampaign = id => knex('campaigns').where({id}).delete();

module.exports = {addCampaign, getCampaignByName,  getCampaignsByOrg, getCampaignById, updateCampaign, deleteCampaign}