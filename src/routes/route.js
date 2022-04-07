const express = require('express');
// const loggermodule = require('./logger')

// const helpermodule = require('../util/helper')
// const formattermodule=require('../validator/formatter')

const router = express.Router();

// router.get('/test-me', function (req, res) {
    
// loggermodule.welcomeMessage()
//     res.send('My first ever api!')
// });

// router.get('/test-me2', function (req, res) {
//     helpermodule.printtodaydate()
//    // console.log('I am inside the second route handler')
//     res.send('My second ever api!')
// });


// router.get('/test-me5', function (req, res) {
//     formattermodule.trimCon()
//     res.send('My final ever api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My first ever api!')
// });
//problem1
router.get('/movies', function (req, res) {
    let arr=["rang de basanti","the shining","lord of the rings","bartman begins"]

    res.send(arr)
});



// adding this comment for no reason
//problem 2
router.get('/i/:id', function (req, res) {
    let a=req.params.id
    let array=["rang de basanti","the shining","lord of the rings","bartman begins"]
    if(a>=array.length){

        res.send("invalid input")
    }else{
        res.send(array[a])
    }   

})
module.exports = router;