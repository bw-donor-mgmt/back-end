const router = require('express').Router()

const Campaigns = require('./campaign-model.js')
const Donations = require('../donations/donations-model.js')
const Donors = require('../donors/donors-model.js'); 

//get Campaign by id 
router.get('/:id', (req, res) => {
    Campaigns
        .getCampaignById(req.params.id)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})



//get campaign by name
router.get('/:name', (req, res) => {
    Campaigns
        .getCampaignByName(req.params.name)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})


//get all donations made to a campaign
router.get('/:id/donations', (req, res) => {
    
    Donations
        .getDonationsByCampId(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})

//get all donors made to a campaign
router.get('/:id/donors', (req, res) => {
    let array_donors = []; 
    Donors
        .getDonors()
        .then( donors => {
            
            Donations
                .getDonationsByCampId(req.params.id)
                .then(donations => {    
                    const ids = donations.map(donation => donation.donor_id)  
                    ids.forEach(id => donors.forEach(donor => {
                        if(donor.id === id){
                            array_donors.push(donor)
                        }
                })
                    
                )
                res.status(200).json(array_donors)
                })
                .catch(e => res.status(400).json(e))
            })
        .catch(e => res.status(400).json(e))
    
})

//Create new campaign
router.post('/', (req, res) => {
    Campaigns
        .addCampaign(req.body)
        .then(r => res.status(201).json(r))
        .catch(e => res.status(400).json(e))
})


//update Campaign
router.put('/:id', (req, res) => {
    Campaigns.updateCampaign(req.params.id, req.body)
    .then(r => res.status(202).json(r))
    .catch(e => res.status(400).json(e))
})

//delete a campaign
router.delete('/:id', (req, res) => {
    Campaigns.deleteCampaign(req.params.id)
    .then(r => res.status(202).json(r))
    .catch(e => res.status(400).json(e))
})
module.exports = router;