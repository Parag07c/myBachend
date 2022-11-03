const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:String,
	category:String,
	price:{
        type:Number,
        require:true
    }
})

module.exports=mongoose.model('products',productSchema)