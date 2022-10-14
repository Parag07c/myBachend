const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
const abc=require('../logger/logger.js')
const dateMonthAndInfo=require('../util/helper.js')
const done=require('../validator/formatter')
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    console.log(abc.Welcome());
    console.log(dateMonthAndInfo.currdate())
    console.log(dateMonthAndInfo.currMonth())
    console.log(dateMonthAndInfo.getBatchInfo());
    console.log(done.trim("   functionUp     "));
    console.log(done.toLowerCase("functionUp"));
    console.log(done.toUpperCase("functionUp"));
    let arr=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
    console.log(lodash.chunk(arr,3));

    let arr1=[1,2,3,4,5,6,7,8,9,10]
    console.log(lodash.tail(arr1));

    let one=[1,2],two=[1,2,3],three=[1,2,5],four=[9,3,5],five=[4,6,3]
    console.log(lodash.union(one,two,three,four,five));

    let a=["name","Parag"] ,b=["age",21],c=["Gender","Male"]
    console.log(lodash.fromPairs([a,b,c]));



    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

