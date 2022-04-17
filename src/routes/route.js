const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
//const bookController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)

router.post("/createBook", authorController.createBook)

router.post("/createPublisher", authorController.createPublisher)
router.get("/allBooks",authorController.allBooks)
router.put("/updateBooks",authorController.updateBooks)


module.exports = router;