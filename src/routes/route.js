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
        //problem 3
    }else{
        res.send(array[a])
    }   

})

//problem 4
router.get('/films', function (req, res) {
    
   let array1= [{
       "id":1,"name":"The Shining"
   },{
       "id":2,"name":"incendies"
   },{
       "id":3,"name":"Rang de basanti"
   },{
       "id":4,"name":"Finding name"
   }];

        
       res.send(array1)
});

//problem 5
router.get('/i/:id', function (req, res) {
    let a=req.params.indexNumber
    let array2= [{
        "id":1,"name":"The Shining"
    },{
        "id":2,"name":"incendies"
    },{
        "id":3,"name":"Rang de basanti"
    },{
        "id":4,"name":"Finding name"
    }];
    
   if(a>=array2.length){
//if(a[i].id==req.params.indexNumber)
        res.send("invalid input")
        
    }else{
        res.send(array2[a])
    }   

})

//     if(a[i].id==req.params.indexNumber){
//     res.send("no movies exits with this id")
    
// }else{
//     res.send(array1[a])
// };
 
     //  module.exports = router;
        //adding this comment for no reason

        //assignment
        router.get('/miss-No', function (req, res) {
            let numArr=[1,2,3,4,5,7,8,9]
            let sum=0;
            let missnum;
            for(let i=0;i<arr.length;i++){
                sum=sum+numArr[i];
            }

            missnum=(((arr.length+1)*arr.length+2)/2)-sum;
            return missnum
                
            
            
        
        
        res.send(missing)

        module.exports = router;
        });