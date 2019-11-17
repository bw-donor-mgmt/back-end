//import server
const server = require('./server.js'); 

//routers
const OrgRouter = require('./organizations/org-router.js');
const AuthRouter = require('./auth/auth-router.js');

server.use('/organizations', OrgRouter)
server.use('/auth', AuthRouter); 

server.get('/', (req, res) => res.status(200).json({message: 'Server is running'})); 

