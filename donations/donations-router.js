const router = require('express').Router()

const Donations = require('./donations-model.js'); 

//get donation by id
router.get('/:id', (req, res) => {
    Donations
        .getDonationById(req.params.id)
        .first()
        .then(r => res.status(202).json(r))
        .catch(e => res.status(400).json(e))
})

//add donation
router.post('/', (req, res) => {
    Donations
        .addDonation(req.body)
        .then(r => res.status(201).json(r))
        .catch(e => res.status(400).json(e))
})




//update donation
router.put('/:id', (req, res) => {
    Donations
        .updateDonation(req.params.id, req.body)
        .then(r => res.status(202).json(r))
        .catch(e => res.status(400).json(e))
})

//delete donation
router.delete('/:id', (req, res) => {
    Donations
        .deleteDonation(req.params.id)
        .then(r => res.status(202).json(r))
        .catch(e => res.status(400).json(e))
})

module.exports = router;