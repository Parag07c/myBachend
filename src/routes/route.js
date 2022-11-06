const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middleware=require('../middleware/middleware')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login",Middleware.mid1, userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",Middleware.mid2, userController.getUserData)

router.put("/users/:userId",Middleware.mid2, userController.updateUser)

router.delete("/user/:userId",Middleware.mid2,userController.deleteData)
module.exports = router;