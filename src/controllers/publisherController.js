const PublisherModel=require('../models/newPublisher')

const createPublisher=async function(req,res){
    let data =req.body
    let result=await PublisherModel.create(data)
    res.send({msg: result})
}

module.exports.createPublisher=createPublisher