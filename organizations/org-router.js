const router = require('express').Router(); 

const Org = require('./org-model.js'); 
const Donors = require('../donors/donors-model.js'); 
const Donations = require('../donations/donations-model.js');
const Campaigns = require('../campaigns/campaign-model.js'); 

//get organization by name
router.get('/:name', (req, res) => {
    Org.findOrgByName(req.params.name)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})

//get organization by email 
router.get('/:id/info', (req, res) => {
    Org
        .findOrgById(req.params.id)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})

//get campaigns by organization _id
router.get('/:id/', (req, res) => {
    Campaigns
        .getCampaignsByOrg(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})


//add donation
router.post('/', (req, res) => {
    Org.addOrg(req.body)
    .then(r => res.status(201).json(r))
    .catch(e => res.status(400).json(e))
})

//update organization
router.put('/:id', (req, res) => {
    Org
        .updateOrg(req.params.id)
        .then(r => res.status(202).json(r))
        .catch(e => res.status(400).json(e))
})

//delete organization
router.delete('/:id', (req, res) => {
    Org
        .deleteOrg(req.params.id)
        .then(r => res.status(202).json(r))
        .catch(e => res.status(400).json(e))
})

module.exports = router