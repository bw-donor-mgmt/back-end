const router = require('express').Router(); 

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const Users = require('../users/user-model.js'); 
const {validateUser} = require('../users/users-helper.js');


router.post('/register', (req, res) => {
    let user = req.body; 

    const validatedUser = validateUser(user) 
    if(validatedUser.isSuccessful === true){
        const hash = bcrypt.hashSync(user.password, 10); 
        user.password = hash; 

        Users
            .add(user)
            .then(r => {
                res.status(201).json(r)
            })
            .catch(e => {
                res.status(500).json(e)
            })

    }else {
        res.status(400).json({
            message: "Invalid input", 
            errors: validatedUser.errors
        })
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body; 

    Users.find({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = getJwtToken(user.username); 
      
            res.status(200).json({
              message: `Welcome ${user.username}!`, 
              token
            })
          } else {
            res.status(401).json({message: "Invalid Credentials"})
          }
        })
        .catch(error => {
          res.status(500).json(error)
        })
});

const getJwtToken = username => {
    const payload = {
        username
    }

    const secret = process.env.JWT_SECRET || "secret";

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router; 