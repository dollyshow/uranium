const batchesModel= require("../models/batchesModel")
const developerModel=require("../models/developerModel")
const createBatches= async function (req, res) {
    var data=req.body
    let savedData=await batchesModel.create(data)
    res.send({msg:savedData})
}
const createDevelopers= async function (req, res) {
    var data1=req.body
    let savedData1=await developerModel.create(data1)
    res.send({msg:savedData1})
}
const scholarshipdevelopers=async function (req, res){
    let eligibles=await developerModel.find({gender:"Female",percentage:{$gte:70}})
    res.send({msg:eligibles})
}
const getDevelopers = async function (req, res) {
    let query1 = req.query.percentage
    let query2 = req.query.program
    let arr = []
    let data1 = await batchesModel.find({ program: { $eq: query2 } }).select({ _id: 1 })
    let data2
    for (let i = 0; i < data1.length; i++) {
        arr.push(data1[i]._id)
    }
    data2 = await developerModel.find({ percentage: { $gte: query1 }, batch: { $in:arr }})
    res.send({ msg: data2 })
}
module.exports.createBatches= createBatches
module.exports.createDevelopers= createDevelopers 
module.exports.scholarshipdevelopers=scholarshipdevelopers
module.exports.getDevelopers=getDevelopers