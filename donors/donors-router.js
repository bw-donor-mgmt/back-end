const router = require('express').Router(); 

//models
const Donors = require('./donors-model.js');
const Donations = require('../donations/donations-model.js'); 

//add new donor
router.post('/', (req, res) => {
    Donors
        .addDonor(req.body)
        .then(r => res.status(201).json(r))
        .catch(e => res.status(400).json(e))
})

//get donor info by donor id
router.get('/:id', (req, res) => {
    Donors
        .findDonorById(req.params.id)
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
    Donations
        .updateDonation(req.params.id, req.body)
        .then(r => res.status(202).json(r))
        .catch(e => res.status(400).json(e))
})

//delete donor

router.delete('/:id', (req, res) => {
    Donations
        .deleteDonation(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})

module.exports = router;