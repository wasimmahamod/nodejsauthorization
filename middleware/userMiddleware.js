var jwt = require('jsonwebtoken');
const User = require('../model/user');
 function userMiddleware(req,res,next){
    let {authorization}=req.headers;
    jwt.verify(authorization, 'shhhhh',async function(err, decoded) {
        if(err){
            res.json({error:"authraization faild"})
        }else{
            let user=await User.find({email:decoded.email})
            if(user){
                next()
            }

        }
    
      });
}
module.exports =userMiddleware;