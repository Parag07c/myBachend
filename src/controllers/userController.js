const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
const createBooksData= async function(req,res){
    let data=req.body
    let savedBooksData=await UserModel.create(data)
    res.send({message:savedBooksData})
}
const getBooksData= async function(req,res){
    let allBooksData=await UserModel.find()
    res.send({message:allBooksData})
}

module.exports.createBooksData=createBooksData
module.exports.getBooksData=getBooksData
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData