const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const authToken = req.headers.authorization;
    if(!authToken){
        res.status(401).send('Identifiant requis!');
    }else {
        const token = authToken.split(' ')[1];
        jwt.verify(token, process.env.SECRET,(err, decoded) => {
            if (err) {
                res.status(403).send('Accès non autorisé!')
            }else {
                next();
            }
        });
    }
};