require('dotenv').config(); 

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
server.use('/user',  UsersRouter); 
server.use('/organizations', OrgRouter); 
server.use('/campaigns', CampaignsRouter); 
server.use('/donors', DonorsRouter); 
server.use('/donations', DonationsRouter); 







server.get('/', (req, res) => res.status(200).json({message: 'Server is running'})); 

