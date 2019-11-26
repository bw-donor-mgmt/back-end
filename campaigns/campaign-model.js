const knex = require('../data/db-config.js'); 

const getCampaigns = () => knex('campaigns'); 
//create campaign
const addCampaign = campaign => knex('campaigns').insert(campaign).returning('id'); 

//get all campaigns for organization
const getCampaignsByOrg = organization_id => knex('campaigns').where({organization_id});

//get campaign by id
const getCampaignById = id => knex('campaigns').where({id});

//get campaign by name 
const getCampaignByName = name => knex('campaigns').whereRaw('LOWER(name) LIKE ?', '%'+name.toLowerCase()+'%');

//update campaign
const updateCampaign = (id, changes) => knex('campaigns').where({id}).update(changes).returning('id');

//delete campaign
const deleteCampaign = id => knex('campaigns').where({id}).delete().returning('id');

//get total for amount raised
const totalRaised = id => knex('donations').sum('amount').where('campaign_id', '=', `${id}`);

module.exports = {getCampaigns, addCampaign, getCampaignByName,  getCampaignsByOrg, getCampaignById, updateCampaign, deleteCampaign, totalRaised}