const mongoose= require('mongoose');

const AuthorSchema=new mongoose.Schema({
    authorName:String,
    age:Number,
    address:String,
    rating:Number
},{timestamps:true})

module.exports=mongoose.model('newauthors',AuthorSchema)