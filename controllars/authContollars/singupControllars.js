const emailTamplate = require("../../helpars/emailTamplate");
const emailVelidation = require("../../helpars/emailVelidation");
const emailVerification = require("../../helpars/emailVerification");
const User = require('../../model/user')
const bcrypt = require('bcrypt');
const token = require("../../token/token");

async function  singupControllars(req,res){
    let {fname,lname,email,password}=req.body;
    if(!fname||!lname){
       return  res.send("Name is Required ")
    }
    if(emailVelidation(email)){
        return res.send('Invalid Email')
    }
    let existingUser =await User.find({email:email})
    
    if(existingUser.length>0){
        return res.send ("User Already In Use ")
    }
    bcrypt.hash(password, 10, function(err, hash) {
        
        let user=new User({
            fname,
            lname,
            email,
            password:hash,
        })
    
        let tToken=token(email)
        user.save()
        emailVerification(user.email,emailTamplate(tToken))
        res.send(user)
    });

    
}

module.exports =singupControllars;