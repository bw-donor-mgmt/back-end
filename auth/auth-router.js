const router = require('express').Router(); 

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const Users = require('../users/user-model.js'); 
const {validateUser} = require('../users/users-helper.js');


router.post('/register', (req, res) => {
    let {username, password, organization} = req.body; 
    

    const validatedResult = validateUser(req.body)
    if (validatedResult.isSuccessful === true){
        const hash = bcrypt.hashSync(password, 10); 
        password = hash; 
        Users.findOrg(organization)
        .first()
        .then(r => {
            console.log(r.id)
            Users
                .add({username: username, password: password, organization_id: r.id})
                .then(saved => {
                    res.status(201).json(saved)
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        })
        

        
      
    }else {
        res.status(400).json({
        messag: "Invalid info about user ", 
        errors: validatedResult.errors
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