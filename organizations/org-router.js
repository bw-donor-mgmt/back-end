const router = require('express').Router(); 

const Org = require('./org-model.js'); 
const Donors = require('../donors/donors-model.js'); 
const Donations = require('../donations/donations-model.js');
const Campaigns = require('../campaigns/campaign-model.js'); 


router.get("/", (req, res) => {
    Org.getAllOrgs()
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
})
//get organization by name
router.get('/:name', (req, res) => {
    Org.findOrgByName(req.params.name)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})

//get organization by id 
router.get('/:id/info', (req, res) => {
    Org
        .findOrgById(req.params.id)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})



//get organization by donor
router.get('/:id/donors', (req, res) => {
    
    Donors.getDonors()
    .then(r => {
        const donors = r; 
        const results = []; 
        Campaigns
        .getCampaignsByOrg(req.params.id)
        .then(r => {
            const campaigns = r; 

            Donations
            .getDonations()
            .then(r => {
                const donations = r; 
                const donations2 = []; 
                campaigns.forEach(campaign => {
                    donations.forEach(donation => {
                        if (donation.campaign_id === campaign.id){
                            donations2.push(donation)
                        }
                    })

                })

                donations2.forEach(donation => {
                    donors.forEach(donor => {
                        if(donor.id === donation.donor_id){
                            results.push(donor)
                        }
                    })
                })

                res.status(200).json(results.filter((item, index) => results.indexOf(item) === index));
            })
        })
    })
})

//get campaigns by organization _id
router.get('/:id/campaigns', (req, res) => {
    Campaigns
        .getCampaignsByOrg(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})


//add organization
router.post('/', (req, res) => {
    Org.addOrg(req.body)
    .then(r => res.status(201).json({message: `Created a new organization`}))
    .catch(e => res.status(400).json(e))
})

//update organization
router.put('/:id', (req, res) => {
    Org.updateOrg(req.params.id)
        .then(r => res.status(202).json({message: `Successfully updated organization with id: ${req.params.id}`}))
        .catch(e => res.status(400).json(e))
})

//delete organization
router.delete('/:id', (req, res) => {
    Org
        .deleteOrg(req.params.id)
        .then(r => res.status(202).json({message: `Successfully deleted organization with id: ${req.params.id}`}))
        .catch(e => res.status(400).json(e))
})

module.exports = router