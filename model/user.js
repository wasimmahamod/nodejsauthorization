const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    verify:{
        type:Boolean,
        default:false,
    }
});

module.exports =mongoose.model('User',userSchema);