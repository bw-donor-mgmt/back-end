//import server
const server = require('./server.js'); 

//authentication
const auth = require('./auth/auth-middleware.js');
//routers
const OrgRouter = require('./organizations/org-router.js');
const AuthRouter = require('./auth/auth-router.js');
const UsersRouter = require('./users/user-router.js'); 
const CampaignsRouter = require('./campaigns/campagin-router.js'); 
const DonorsRouter = require('./donors/donors-router.js'); 
const DonationsRouter = require('./donations/donations-router.js'); 

//base endpoints for different categories
server.use('/auth', AuthRouter); 
server.use('/user', auth,  UsersRouter); 
server.use('/organizations', auth, OrgRouter); 
server.use('/campaigns', auth, CampaignsRouter); 
server.use('/donors', auth, DonorsRouter); 
server.use('/donations',auth,  DonationsRouter); 


server.get('/', (req, res) => res.status(200).json({message: 'Server is running'})); 

