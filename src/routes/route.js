const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
 
router.get("/getDistrictById",CowinController.getDistrictById)//1
router.get("/getWeather",CowinController.getWeather)//2
router.get("/cowin/getTemp", CowinController.getTemp)//3
router.get("/getCities", CowinController.getCities)//4
router.get("/getMemes",CowinController.getMemes)//5
router.post("/memeId", CowinController.memeId)//6

module.exports = router;