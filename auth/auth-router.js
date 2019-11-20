//Where user recieves token

const router = require('express').Router(); 

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const Users = require('../users/user-model.js'); 
const Org = require('../organizations/org-model.js');
const {validateUser} = require('../users/users-helper.js');

/*************REGISTERS A USER**************/

router.post('/register', (req, res) => {
    let {username, password, organization} = req.body; 

    const validatedResult = validateUser(req.body)
    if (validatedResult.isSuccessful === true){
        const hash = bcrypt.hashSync(password, 10); 
        password = hash; 
        
        Users.findOrg(organization)
      
        .first()
        .then(r => {
            const token = getJwtToken(username); 
            if(r)
                { 
                    Users
                        .addUser({username: username, password: password, organization_id: r.id})
                        .then(saved => {
                            res.status(201).json({message:`welcome user ${username}!`, id: saved[0], token: token});
                        })
                        .catch(error => {
                            res.status(500).json(error)
                        })
                } 
                else{
                    Org.addOrg({name: `${organization}`})
                        .then(r => Users
                            .addUser({username: username, password: password, organization_id: r[0]})
                            .then(saved => {
                                console.log(saved)
                                res.status(201).json({message:`welcome user ${username}!`, id: saved[0], token: token});
                            })
                            .catch(error => {
                                res.status(500).json(error)
                            }))
                        .catch(e => res.status(400).json(e));
                }
        })
      
    }else {
        res.status(400).json({
        messag: "Invalid info about user ", 
        errors: validatedResult.errors
        })
    }
})

/*************lOGS A USER IN**************/
router.post('/login', (req, res) => {
    const {username, password} = req.body; 

    Users.findUser({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = getJwtToken(user.username); 
      
            res.status(200).json({
              message: `Welcome ${user.username}!`, id: user.id, 
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