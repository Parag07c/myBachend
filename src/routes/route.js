const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productController=require("../controllers/ProductController")
const userModel=require("../models/userModel")
const productModel=require("../models/productModel")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createuser",commonMW.mid1,async function(req,res){
    let body=req.body
    let result=await userModel.create(body)
    res.send({msg:result})
})

router.post("/createProduct",async function(req,res){
    let body=req.body
    let result =await productModel.create(body)
    res.send({msg:result})
})

router.post("/orderPurchase",commonMW.mid1,productController.orderPurchase)



//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;