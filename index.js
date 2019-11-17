//import server
const server = require('./server.js'); 

server.get('/', (req, res) => res.status(200).json({message: 'Server is running'})); 
