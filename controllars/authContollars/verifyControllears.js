var jwt = require('jsonwebtoken');
const User = require('../../model/user');
async function verfiyControllears (req,res){
    let {authorization}=req.headers;
    var decoded = jwt.verify(authorization, 'shhhhh');
    let updateUser =await User.findOneAndUpdate({email:decoded.email},{verify:true},{new:true})
    res.send(updateUser)
}

module.exports=verfiyControllears;