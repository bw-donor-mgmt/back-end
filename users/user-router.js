
const bcrypt = require('bcryptjs');  
const router = require('express').Router(); 

const Users = require('./user-model.js'); 
const Campaigns = require('../campaigns/campaign-model.js')
const UsersOrgs = require('../users-orgs/users-orgs-model.js'); 
const Orgs = require('../organizations/org-model.js'); 
const Donations = require('../donations/donations-model.js');
const Donors = require('../donors/donors-model.js');

/*************GET A USER INFO**************/

router.get('/:id', (req, res) => {
    Users
        .findUserById(req.params.id)
        .first()
        .then(r => res.status(200).json({id : r.id, username: r.username, organization_id: r.organization_id}))
        .catch(e => res.status(400).json(e))
})

/*************GET USERS ORGANIZATIONS**************/

router.get('/:id/organizations', (req, res) => {
      
    Orgs
       .getAllOrgs()
       .then(r => {
            const orgs = r; 
            UsersOrgs
                .getOrgsByUserId(req.params.id)
                .then(r => {
                    const users_orgs = r;
                    const results = [];  
                    users_orgs
                        .forEach(i => {
                        const e = orgs.find(org => org.id === i.organization_id); 
                        results.push(e); 
                
                    })
                    console.log(results);
                    res.status(200).json(results); 
            })
        })
        .catch(e => res.status(500).json(e))
   
})
/**********Create Organization for User***********/
router.post('/:id/addorganization', (req, res) => {
    
    Orgs.findOrgByName(req.body.name)
    .first()
    .then(r => {
        if(r){
           UsersOrgs
            .add({user_id: req.params.id, organization_id: r.id})
            .then(r => res.status(201).json({message: "organization added to user account"}))
            .catch(e => res.status(500).json(e))
        }
        else{
            Orgs
                .addOrg(req.body)
                .then(r => {
                    UsersOrgs
                        .add({user_id: req.params.id, organization_id: r})
                        .then(r => res.status(200).json({message: "new organization created and added to user account"}))
                        .catch( e => res.status(500).json(e))
                })
        } 

    })
    .catch(e => res.status(500).json(e))
    
    
})

/************GET ALL DONORS FOR USER***************/
router.get('/:id/donors', (req, res) => {
    UsersOrgs
            .getOrgsByUserId(req.params.id)
            .then(
                r => {
                    const orgs = r;
                    const campaigns = []

                    Campaigns
                        .getCampaigns() 
                        .then(r => {
                            orgs.forEach(org => {
                                r.forEach(campaign => {
                                    if (campaign.organization_id === org.organization_id) {
                                        campaigns.push(campaign)
                                    }

                                })

                                Donations
                                .getDonations()
                                .then(r => {
                                    const donations = []; 
                                    r.forEach(donation => {
                                        campaigns.forEach( campaign => {
                                            if(campaign.id === donation.campaign_id){
                                                donations.push(donation); 
                                            }
                                        })

                                        Donors
                                        .getDonors()
                                        .then(r => {
                                            const donors = []; 
                                            donations.forEach(donation => {
                                                r.forEach(donor => {
                                                    if(donor.id === donation.donor_id){
                                                        donors.push(donor); 
                                                    }
                                                })
                                            })
                                            res.status(200).json(donors.filter((item, index) => donors.indexOf(item) === index))
                                        })
                                    })
                                })
                            })
                        })

                }
            )
})


/*************UPDATES A USER**************/
router.put('/:id', (req, res) => { 
    

    if(req.body.password){
        const password = bcrypt.hashSync(req.body.password)
        req.body.password = password
        }

    Users
        .updateUser(req.params.id, req.body)
        .then(r => {
            res.status(200).json({message: `User with id: ${req.params.id} was successfully updated!`})
        })
        .catch(error => res.status(400).json(error))
    
})

/*************DELETES A USER**************/

router.delete('/:id', (req, res) => {

    Users
        .deleteUser(req.params.id)
        .then(r => res.status(200).json({message: `User Account with id: ${req.params.id} was successfully deleted!`}))
        .catch(error => res.status(400).json(error))
})


module.exports = router; 