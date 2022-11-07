const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    const token=req.header["x-auth-token"]
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
    else{
        let decodedToken = jwt.verify(token, "functionup-thorium");
        if (!decodedToken)
             return res.status(400).send({ status: false, msg: "token is invalid" })
        else{
            req.decodedToken=decodedToken
                next()
        }
    }
}

const authorise = async function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId=req.body.emailId
    let password=req.body.password
    const valid=await userModel.findOne({emailId:userId,password:password}) 
    if(valid) next()
    else res.status(400).send({msg:"please enter valid userName and Password"})
}

module.exports={authenticate,authorise}
