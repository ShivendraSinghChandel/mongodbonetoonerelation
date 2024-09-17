const mongoose=require("mongoose");

const profilemodel=new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        unique:true
    },
    firstname:String,
    lastname:String

})

module.exports=mongoose.model("profile",profilemodel);