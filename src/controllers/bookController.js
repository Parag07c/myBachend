const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")
const { privateDecrypt } = require("crypto")
const { model } = require("mongoose")


const createBook=async function(req,res){
    let data=req.body
    if(data.author_id){
        let savedData=await BookModel.create(data)
    res.send({msg:savedData})
    }
    else{
        res.send({msg:"data could not be accepted"})
    }
    
}
const createAuthor=async function(req,res){
    let data=req.body
    if(data.author_id){
        let savedData=await AuthorModel.create(data)
    res.send({msg:savedData})
    }
    else{
        res.send({msg:"data could nod be accepted"})

    }
}
const findBooks=async function(req,res){
    let name=req.body
    let id=await AuthorModel.findOne(name).select({author_id:1,_id:0})
     let books=await BookModel.find(id).select({name:1,_id:0})
    res.send({msg:books})
}
const NameAndPrice=async function(req,res){
    // let BookName=req.body
    let book=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true}).select({author_id:1,price:1,_id:0})
    let books=await AuthorModel.find({author_id:book.author_id}).select({
        author_name:1,_id:0
    })
    
    res.send({msg:book, books})
}
const getAutherName=async function(req,res){
    let books=await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let book1=books.map(x=>x.author_id);
    const authorName=await AuthorModel.find({author_id:{$in:book1}}).select({author_name:1,_id:0})
      res.send({msg:authorName})
}

module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
module.exports.findBooks=findBooks
module.exports.NameAndPrice=NameAndPrice
module.exports.getAutherName=getAutherName


// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }
// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
//      res.send( { msg: allBooks})
// }
// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE

module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
