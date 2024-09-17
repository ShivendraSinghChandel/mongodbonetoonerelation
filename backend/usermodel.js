const mongoose=require("mongoose");

const usermodel=new mongoose.Schema({
    username:String,
    email:String
})

module.exports=mongoose.model("user",usermodel);