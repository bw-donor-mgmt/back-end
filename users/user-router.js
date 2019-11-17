
const router = require('express').Router(); 

const Users = require('./user-model.js'); 
const auth = require('../auth/auth-middleware.js')


/*************GET A USER INFO**************/

router.get('/:id', auth, (req, res) => {
    Users
        .findUserById(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(e => res.status(400).json(e))
})
/*************UPDATES A USER**************/
router.put('/:id', auth, (req, res) => {

    Users
        .updateUser(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(error => res.status(400).json(error))
})

/*************DELETES A USER**************/

router.delete('/:id', auth, (req, res) => {

    Users
        .deleteUser(req.params.id)
        .then(r => res.status(200).json(r))
        .catch(error => res.status(400).json(error))
})


module.exports = router; 