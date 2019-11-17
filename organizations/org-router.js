const router = require('express').Router(); 

const Org = require('./org-model.js'); 


router.get('/', (req, res) => {
    Org.findByName(req.body.name)
        .first()
        .then(r => res.status(200).json(r))
        .catch(e=> console.log(e))
})

module.exports = router