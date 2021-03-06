

//libraries
const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

//create server
const server = express(); 

//use libraries
server.use(express.json()); 
server.use(helmet()); 
server.use(cors()); 



const port = process.env.PORT || 4400; 


server.listen(port, () => console.log(`SERVER IS RUNNING ON ${port}`)); 

//export server

module.exports = server ; 