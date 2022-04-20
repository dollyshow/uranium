const express = require('express');
const router = express.Router();

//onst authorController= require("../controllers/developerController")
 const developerController = require('../controllers/developerController')
// const bookController= require("../controllers/bookController");
// const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/createDeevelopers", authorController.createDevelopers  )

 router.post('/createBatches', developerController.createBatches)

 router.post("/createDevelopers", developerController.createDevelopers)

 router.get('/scholarshipdevelopers', developerController.scholarshipdevelopers)

 router.get('/getDevelopers', developerController.getDevelopers)

module.exports = router;