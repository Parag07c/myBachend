const mongoose=require('mongoose')

const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
   userId:{
    type:ObjectId,
    ref:'usercollections' 
},
productId:{
    type:ObjectId,
    ref:'products'
},
amount:Number,
isFreeAppUser:Boolean,
date:{
    type:Date,
    default:03/11/2022
}
})

module.exports=mongoose.model('orders',orderSchema)