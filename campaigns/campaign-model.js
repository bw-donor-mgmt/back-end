const knex = require('../data/db-config.js'); 

//create campaign
const addCampaign = campaign => knex('campaigns').insert(campaign); 

//get all campaigns for organization
const getCampaignsByOrg = organization_id => knex('campaigns').where({organization_id});

//get campaign by id
const getCampaignById = id => knex('campaigns').where({id});

//update campaign
const updateCampaign = id => knex('campaigns').where({id}).update()

//delete campaign
const deleteCampaign = id => knex('campaigns').where({id}).delete();

module.exports = {addCampaign, getCampaignsByOrg, getCampaignById, updateCampaign, deleteCampaign}