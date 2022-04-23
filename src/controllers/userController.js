const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//1
const createUser = async function (abcd, xyz) {
  try{
  let data = abcd.body;
  console.log(a);
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
  }
  catch(err){
    console.log("this is the error:",err.message)
    xyz.status(400).send({msg:"server error",error:err.message})
  }
};
//2
const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  console.log(a);
  if (!user) 
  return  res.send({
      status: false,
     
      msg: "username or the password is not corerct" });
     // console.log(a);
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  )
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });

}catch(err){
  
  console.log("this is the error:",err.message)
res.status(400).send({msg:"server error",error:err.message})
  }
};
//3

const getUserData = async function (req, res) {
  try{
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  console.log(a);
  if (!userDetails)
   return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });

}catch(err){
  
  console.log("this is the error:",err.message)
res.status(400).send({msg:"server error",error:err.message})
  }
};

//4
const updateUser = async function (req, res) {
  try{
 let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }
  console.log(a);
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
}catch(err){
  console.log("this is the error:",err.message)
res.status(400).send({msg:"server error",error:err.message})
  }
};
//5
const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send({ status: false, msg: "No such user exists" });
  }
  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}},{new:true});
  res.send({ status: deletedUser, data: deletedUser });
}catch(err){
  
  console.log("this is the error:",err.message)
res.status(400).send({msg:"server error",error:err.message})
  }
}; 
 module.exports.createUser = createUser;
 module.exports.getUserData = getUserData;
 module.exports.updateUser = updateUser;
 module.exports.loginUser = loginUser;
 module.exports.deleteUser = deleteUser;
