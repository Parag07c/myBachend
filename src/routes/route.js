const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook)

router.get("/getBooksData", BookController.getBooksData)

router.post("/getBooksInYear",BookController.booksInYear)

router.get("/getParticularBooks",BookController.particularBook)

router.get("/getXINBooks",BookController.priceOfBooks)

router.get("/getRandomBooks",BookController.randomBooks)


module.exports = router;