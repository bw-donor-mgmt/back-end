const jwt = require('jsonwebtoken'); 

module.exports = (req, res, next) => {
    const token = req.headers.authorization; 

    if (token) {
        const secret = process.env.JWT_SECRET || 'secret'; 

        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({message: 'Username and password does not match!'})
            }else{
                req.decodedJwt = decodedToken; 
                next(); 
            }
        }); 
    } else {
        res.status(401).json({message: 'You are not logged in'}); 
    }
}