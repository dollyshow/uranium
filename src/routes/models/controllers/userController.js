const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedBook= await UserModel.create(data)
    res.send({msg: savedBook})
}

const getListBooks= async function (req, res) {
    let allLists= await UserModel.find()
    res.send({msg: allLists})
}

module.exports.createBook= createBook 
module.exports.getListBooks= getListBooks