const jwt = require("jsonwebtoken");
const mid1=function(req,res,next){

    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
   
  if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  try{
  let decodedToken = jwt.verify(token, "functionup-thorium");
req["decodedToken"]=decodedToken

  }catch(err){
    return res.status(403).send({ status: false, msg: "token is invalid" });
  }
    next()
  }
  const mid2=function(req,res,next){
  let userToBeModified = req.params.userId
  let userLoggedIn = req.decodedToken.userId
  if(userToBeModified != userLoggedIn)
   return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  }
  module.exports.mid1=mid1;
  module.exports.mid2=mid2;