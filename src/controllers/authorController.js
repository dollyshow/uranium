const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}
//const bookModel= require("../models/bookModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({data: bookCreated})
}
const publisherModel=require("../models/publisherModel")

const createBook = async function (req, res) {
    let data = req.body;
    if (!data.author || !data.publisher)
        res.send({ msg: "id is required" })
  else {
        let bookCreated = await bookModel.create(data);
        res.send({ msg: bookCreated });
    }
}
const allBooks = async function (req, res) {
    let allBooks=await bookModel.find().populate(['author','publisher'])
    res.send({ msg: allBooks});
    }


    const updateBooks = async function (req, res) {
        let publisherId = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select("_id");
        let updateData 
        for (let i = 0; i < publisherId.length; i++){
            updateData= await bookModel.updateMany({publisher:publisherId[i]._id },  {$set: { isHardCover:true } })
        }
        let authorId = await AuthorModel.find({ rating: { $gt: 3.5 } }).select("_id")
        let updateData1;
        for (let i = 0; i < authorId.length; i++) {
             updateData1 = await bookModel.updateMany({ author: authorId[i]._id }, { $inc: { price: 10 } })
        }
        res.send({ msg1: updateData, msg2: updateData1 })
    }

const bookModel= require("../models/bookModel")
module.exports.createAuthor= createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook= createBook
module.exports.allBooks=allBooks 
module.exports.updateBooks=updateBooks