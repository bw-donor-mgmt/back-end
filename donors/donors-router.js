const router = require('express').Router(); 


//models
const Donors = require('./donors-model.js');
const Donations = require('../donations/donations-model.js'); 

//add new donor
router.post('/', (req, res) => {
    Donors
        .addDonor({...req.body})
        .then(r => res.status(201).json(r))
        .catch(e => res.status(400).json(e))
})

//add donation for a specific donor
router.post('/:id/donations', (req, res) => {
    Donations
    .addDonationByDonor(req.params.id)
    .then(r => res.status(201).json({message: `Donation created for donor with id: ${req.params.id}`}))
    .catch(e => res.status(400).json(e))
})


//get all donors

router.get('/', (req, res) => {
    Donors.getDonors()
    .then(r => res.status(200).json(r))
    .catch(e => res.status(400).json(e))
})
//get donor info by donor id
router.get('/:id', (req, res) => {
    Donors
        .findDonorById(req.params.id)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})

//get donor's past donations

router.get('/:id/donations', (req, res) =>{
    Donations
        .donationsBy(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})




//update donor 

router.put('/:id', (req, res) => {
    Donors
        .updateDonor(req.params.id, {...req.body})
        .then(r => res.status(202).json({message: `Donor\'s with id: ${req.params.id} information was updated!`}))
        .catch(e => res.status(400).json(e))
})

//delete donor

router.delete('/:id', (req, res) => {
    Donors
        .deleteDonor(req.params.id)
        .then(r => res.status(200).json({message: `Donor with id: ${req.params.id} was deleted!`}))
        .catch(e => res.status(400).json(e))
})

module.exports = router;