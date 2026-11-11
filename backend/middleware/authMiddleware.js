const jwt =require('jsonwebtoken');
const User = require('../model/User');


const protect = async(req ,res , next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){  //jo bearer se start ho rhi he wo req.hea.auth me token ki value hogi
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token ,process.env.JWT_SECRET);    //dono ko match karo kya dono same he ya nhi 
            req.user = await User.findById(decoded.id).select('-password');  //??
            next();
        }
        catch(error){
            res.status(401).json({ message: 'Not authorized, token failed'});
        }
    }
    if(!token){
        res.status(401).json({ message: 'Not authorized, token failed' });
    }

};

module.exports = { protect };