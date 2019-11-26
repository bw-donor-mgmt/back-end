
const router = require('express').Router(); 

const Users = require('./user-model.js'); 
const auth = require('../auth/auth-middleware.js')
const UsersOrgs = require('../users-orgs/users-orgs-model.js'); 
const Orgs = require('../organizations/org-model.js'); 

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




/*************UPDATES A USER**************/
router.put('/:id', (req, res) => { 
    Users
        .updateUser(req.params.id, req.body)
        .then(r => res.status(200).json({message: `User with id: ${req.params.id} was successfully updated!`}))
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