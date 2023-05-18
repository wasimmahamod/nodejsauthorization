const User = require("../../model/user");

async function userContoller(req,res){
    let data=await User.find({}) 
    res.send(data)
}

module.exports=userContoller;