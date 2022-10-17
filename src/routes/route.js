const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')

});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')

})
router.get('/movies', function(req,res){
    let arra=['Spider-man','Bahubali','M.S Dhoni the untold story']
    res.send("The movies are :"+ arra);
})

router.get('/movies/:indexNumber',function(req,res){
    let movies = ['P.K','3-idiots','Bahubali','Singham']
    let movieName= req.params
    res.send("The movie Name is :"+ movies[movieName.indexNumber])
})
router.get('/movies/:indexNumber',function(req,res){
    let movies = ['P.K','3-idiots','Bahubali','Singham']
    let movieName= req.params
    res.send(movieName.indexNumber<movies.length?"The movie Name is :"+ movies[movieName.indexNumber]:"error: Please use a valid index")
})
router.get('/films',function(req,res){
    let arrayofObj =[
         {
        "id":1,
        "name":"The Shining"},
        {
            "id":2,
            "name":"Incendies"},
            {
                "id":3,
                "name":"Rang de Basanti"},
                {
                    "id":4,
                    "name":"Finding Nemo"}
         ]
         res.send(arrayofObj)
})
router.get('/films/:filmId',function(req,res){
    let arrayofObj =[
         {
        "id":1,
        "name":"The Shining"},
        {
            "id":2,
            "name":"Incendies"},
            {
                "id":3,
                "name":"Rang de Basanti"},
                {
                    "id":4,
                    "name":"Finding Nemo"}
         ]
         for(let i=0;i<arrayofObj.length;i++){
            if(arrayofObj[i].id==req.params.filmId){
                res.send(arrayofObj[i])
                break;
            }
         }
         res.send("error : No movie exists with this id")
})


module.exports = router;