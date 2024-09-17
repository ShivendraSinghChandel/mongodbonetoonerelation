const userModel=require("./usermodel")
const profileModel=require("./profilemodel")
const userSave=async(req,res)=>{
    const {fname,lname,uname,email}=req.body;
    console.log(email);
    const userData=await userModel.create({
        username:uname,
        email:email
    })

    const profileData=await profileModel.create({
        User:userData._id,
        firstname:fname,
        lastname:lname

    })

    res.send("data saved");
}

const dataDisplay=async(req,res)=>{
    const data=await profileModel.find().populate("User");
    res.send(data)
}



module.exports={
    userSave,
    dataDisplay
}