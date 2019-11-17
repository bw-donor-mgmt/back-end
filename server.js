require('dotenv').config(); 

//libraries
const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 

//create server
const server = express(); 

//use libraries
server.use(cors()); 
server.use(helmet()); 
server.use(express.json()); 



const port = process.env.PORT || 5000; 


server.listen(port, () => console.log(`SERVER IS RUNNING ON ${port}`)); 


//export server

module.exports = server ; 