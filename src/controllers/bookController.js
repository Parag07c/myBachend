const authorModel = require("../models/newAuthor")
const bookModel= require("../models/newBook")
const publisherModel=require("../models/newPublisher")

const createBook= async function (req, res) {
    let book = req.body
    if(book.authorId && book.publisherId){
        let valid=await authorModel.findOne({_id:{$eq:book.authorId}})
        let valid2=await publisherModel.findOne({_id:{$eq:book.publisherId}})
        if(valid && valid2){
            let create=await bookModel.create(book)
            return res.send({data:create})
        }else if(valid==null){
            return res.send({msg:"please enter valid auther Id"})
        }else{
            return res.send({msg:"please enter valid publisher Id"})
        }
    }else{
        return res.send({msg:"the detail is required"})
    }
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('authorId').populate('publisherId')
    res.send({data: books})
}

const update=async function(req,res){
    let findId=await publisherModel.find({name:{$in:["HarperCollins","Penguin"]}}).select({_id:1});
    let b=findId.map(x=>x._id)
    let result=await bookModel.updateMany({
        publisherId:{$in:b}},
        {$set:{isHardCover:true}},{new:true})
    res.send({msg:result})
    
}
const change=async function(req,res){
    let a=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let b=a.map(x=>x._id)
    let result=await bookModel.updateMany(
        {authorId:{$in:b}},
        {$inc:{price:10}},
        {new:true})
        res.send({msg:result})
}


const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

// const createLiberary=async function(req,res){
//     let liberary= req.body
//     let result=await bookModel.create(liberary)
//     res.send({msg:result})
// }
// module.exports.createLiberary=createLiberary
module.exports.update=update
module.exports.change=change
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
