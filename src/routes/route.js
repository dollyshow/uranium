const express = require('express');
const router = express.Router();
 
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor",BookController.createAuthor )
router.get("/getBooksList", BookController.getBooksList)

router.get("/updateBooks", BookController.updateBooks)
router.get("/dBooks", BookController.dBooks)


module.exports = router;