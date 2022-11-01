const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController=require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createLiberary", bookController.createLiberary)
router.post("/createAuthor", authorController.createAuthor )
router.post("/createPublisher",publisherController.createPublisher)
router.post("/createbooks",bookController.createBook)
router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getBooksData", bookController.getBooksData)
router.put("/books",bookController.update)
router.put("/change",bookController.change)


// router.post("/createBook", bookController.createBook  )


router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;