const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
//1
const createUser = async function (abcd, xyz) {
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
};
//2
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user) 
  return  res.send({
      status: false,
      msg: "username or the password is not corerct" });
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
};

//3

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
   return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};
//4
const updateUser = async function (req, res) {
 let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

//5
const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send({ status: false, msg: "No such user exists" });
  }
  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}},{new:true});
  res.send({ status: deletedUser, data: deletedUser });

};


  
 module.exports.createUser = createUser;
 module.exports.getUserData = getUserData;
 module.exports.updateUser = updateUser;
 module.exports.loginUser = loginUser;
 module.exports.deleteUser = deleteUser
