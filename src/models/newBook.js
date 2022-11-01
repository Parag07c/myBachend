const mongoose =require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const BookSchema= new mongoose.Schema({
    name:String,
    authorId:{
        type:ObjectId,
        ref:'newauthors'
    },
    price:Number,
    ratings:Number,
    publisherId:{
        type:ObjectId,
        ref:'newpublishers'
    },
    isHardCover:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports=mongoose.model('newbooks',BookSchema)