const { SECRET } = require("../config");
const jwt = require('jsonwebtoken');


module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];

    try {
        if (token) {
            const userData = jwt.verify(token, SECRET);
            req.user = userData;
        }
    } catch (err) {
        // res.status(401).json({ message: 'Invalid access token!' });
    }
    next();
};  
