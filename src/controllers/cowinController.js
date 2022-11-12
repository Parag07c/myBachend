let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getVaccinationSession=async function(req,res){
    try {
        let districtId=req.query.district_id
        let date=req.query.date
        let options={
            method:"get",
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result=await axios(options)
        
        return res.status(200).send({msg:result.data})
    } catch (error) {
        return res.status(500).send({msg:error.message})
    }
}

const getTemp=async function(req,res){
    try {
        let Id=req.query.appid
        let country=req.query.q
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${Id}`
        }
        let result=await axios(options)
        return res.status(200).send({msg:result.data.main.temp})
    } catch (error) {
        return res.status(500).send({msg:error.message})
        
    }
}

const getCitiesTemp=async function(req,res){
    try {
        let Id=req.body.appid
        let cities=req.body.cities
        let temp=[]
        for(let i=0;i<cities.length;i++){
            let options={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${Id}`
            }
            let result=await axios(options)
            temp.push({city:cities[i],temp:result.data.main.temp})
        }
        temp.sort((a,b)=>a.temp -b.temp)
        return res.status(200).send(temp)
    } catch (error) {
        return res.status(500).send({msg:error.message})
        
    }
}

const mems=async function (req,res){
    try {
        let options={
            method:"get",
            url:`https://api.imgflip.com/get_memes`
        }
   let result=await axios(options)
   return res.status(200).send(result.data)
    } catch (error) {
        return res.status(500).send({msg:error.message})
    }
}
const PostMems=async function(req,res){
    try {
        let text0=req.query.text0
        let text1=req.query.text1
        let template=req.query.template_id
        let username=req.query.username
        let password=req.query.password

        let options={
            method:"post",
            url:`https://api.imgflip.com/caption_image?text0=${text0}&text1=${text1}&template_id=${template}&username=${username}&password=${password}`
        } 
   let result=await axios(options)
   return res.status(200).send(result.data)
    } catch (error) {
        return res.status(500).send({msg:error.message})
        
    }
}

module.exports={mems,PostMems}
module.exports.getCitiesTemp=getCitiesTemp
module.exports.getTemp=getTemp
module.exports.getVaccinationSession=getVaccinationSession
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp