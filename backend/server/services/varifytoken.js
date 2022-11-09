const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token = req.header('auth-token');
    // console.log(token)
    if(!token) return res.status(401).send('Access Denied, You need to login or sign in.');

    try{
        const details = jwt.verify(token,process.env.JWTSECRET);
        req.user = details;
        next();
    }catch(err){
        res.status(400).send('Invalid Token');   
    }

}