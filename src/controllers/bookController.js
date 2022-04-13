const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedDataa= await AuthorModel.create(data)
    res.send({msg: savedDataa})
}
const getBooksList = async function (req, res) {
    let data = await AuthorModel.findOne({ authorname: "Chetan Bhagat" })
    let getData = await BookModel.find({ author_id: data.author_id });
    res.send({ msg: getData })
}
const updateBooks = async function (req, res) {
    let data = await BookModel.findOneAndUpdate({ name: "Two states" }, { $set: { price: 100 } })
    let getData = await AuthorModel.find({ author_id: data.author_id }).select({ authorname: 1, _id: 0 });
    let newPrice = await BookModel.find({ name: "Two states" }).select({ price: 1, _id: 0 });
    res.send({ msg: getData, newPrice })
}
const dBooks=async function(req,res){
    const booksId=await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id=booksId.map(inp=> inp.author_id)

    let temp=[]
    for(let i=0;i<id.length;i++) {
        let x=id[i]
        const author=await AuthorModel.find({author_id:x}).select({authorname:1,_id:0})
        temp.push(author)
    }

const authorName=temp.flat()
res.send({msg:authorName})


}


module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
module.exports.updateBooks= updateBooks
module.exports.dBooks= dBooks
module.exports.createAuthor=createAuthor