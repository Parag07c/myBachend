const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get('/getBooks',UserController.getBooksData)
router.post('/addBooks',UserController.createBooksData)

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

module.exports = router;