const productModel=require('../models/productModel')
const userModel=require('../models/userModel')
const orderModel=require('../models/orderModel')

const orderPurchase=async function(req,res){
    let body =req.body
    if(body.userId && body.productId ){
        let valid1=await productModel.findOne({_id:body.productId})
        let valid2=await userModel.findOne({_id:body.userId})
        if(valid1 &&valid2){
            let a=req.header["isfreeappuser"]
            if(a=="true"){
                await orderModel.create(body)
                let ordercreate=await orderModel.findOne({body}).populate('userId').populate('productId')
                return res.send({ordercreate})
            }else{

                 let Price =await productModel.findOne({_id:body.productId}).select({price:1,_id:0})
                let Balance=await userModel.findOne({_id:body.userId}).select({balance:1,_id:0})
                if(Balance.balance>=Price.price){
                   await userModel.updateOne({_id:body.userId},{
                     $set:{balance:Balance.balance - Price.price}
                   },{new:true})
                    await orderModel.create(body)
                    await orderModel.updateOne({body},{$set:{amount:Price.price}},{new:true})
                   let ordercreate=await orderModel.findOne(body).populate('userId').populate('productId')
                    
                return res.send({ordercreate})
                }else{
                    return res.send("balance is insufficient")
                }

            }
        }else if(valid1==null){
            return res.send({error:"please enter valid product Id"})
        }else{
            return res.send({error:"Please enter valid user Id"})
        }
    }else{
        return res.send({msg: "please enter this field"})
    }
        
}

module.exports.orderPurchase = orderPurchase