const jwt = require('jsonwebtoken');



const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '');
    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.Secret_key);
        req.user = decoded;                         
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid Token'});
    }




}
module.exports = authenticate;