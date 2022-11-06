const userModel=require('../models/userModel')
const mid2=async function(req,res,next){
    let present=req.headers["x-auth-token"]
    if(!present){
        return res.send({Status:false,msg:"token must be present"})
    }next()
}
const mid1 =async function(req,res,next){
    let userName= req.body.emailId;
    let password=req.body.password
    let user = await userModel.findOne({emailId:userName,password:password});

     if (!user) {
      return res.send({status:false,msg:"No such user exists"});
  }next()
}

module.exports.mid1=mid1
module.exports.mid2=mid2
