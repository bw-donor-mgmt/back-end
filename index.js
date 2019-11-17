//import server
const server = require('./server.js'); 

//routers
const OrgRouter = require('./organizations/org-router.js');
const AuthRouter = require('./auth/auth-router.js');
const UsersRouter = require('./users/user-router.js'); 


server.use('/auth', AuthRouter); 
server.use('/user', UsersRouter)
server.use('/organizations', OrgRouter)


server.get('/', (req, res) => res.status(200).json({message: 'Server is running'})); 

