
const express = require('express');
const router = express.Router();
//const timestamp=require('log-timestamp');
const moment=require("moment")
const Controller = require("../controllers/userController")

function middleware1(req, res, next) {
    let timestamp=moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(`${timestamp} , ${req.ip} , ${req.route.path}`)
    next();
}

router.get("/api1", middleware1, Controller.api1)

router.get("/api2", middleware1, Controller.api2)

router.get("/api3", middleware1, Controller.api3)

router.get("/api4", middleware1, Controller.api4)

module.exports = router;  