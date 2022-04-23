const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware=require("../middleware/auth.js")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/userr", userController.createUser  )

 router.post("/login", userController.loginUser)
 router.get("/users/:userId",middleware.mid1, userController.getUserData)

 router.put("/users/:userId",middleware.mid1,middleware.mid2,userController.updateUser)
router.delete("/users/:userId",middleware.mid1,middleware.mid2, userController.deleteUser)
module.exports = router;