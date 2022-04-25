let axios = require("axios")
//1
let getDistrictById = async function (req, res) {
    try {
        let district_id= req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${district_id} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
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
//2
let getWeather = async function (req, res) {
    try {
        
        let city= req.query.q
        let appid = req.query.appid
        //console.log(`query params are: ${London} ${cowin/weather}`)
        
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result.data)
        let data = result.data  
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}
//3
let getTemp = async function (req, res) {
    try {
        
        let city= req.query.q
        let appid = req.query.appid
        //console.log(`query params are: ${London} ${cowin/weather}`)
        
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result.data.main.temp)
        let data = result.data.main.temp  
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}
//4
let getCities  = async function (req, res) {
    try {
        let cities=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"];
        let cityArr=[];
        for(let i=0;i<cities.length;i++){
        var option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=eb8ffe0643277d5918a642535258ce43`
        }
        result= await axios(option)
        cityArr[i]={ city: result.data.name , temp: result.data.main.temp}
    }
        let output=cityArr.sort((a,b)=>(a.temp-b.temp))
        res.send(output) 
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }
}
//5
let getMemes = async function (req, res) {
    try {
      //  let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
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
//6
let memeId = async function (req, res) {
    
        try {
            let template_id=req.query.template_id;
            let text0=req.query.text0
            let text1=req.query.text1
            let username =req.query.username;
            let password =req.query.password;
            let options = {
                method: 'post',   
        
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        console.log(result.data)
        let data = result.data 
        res.status(200).send({ msg: data, status: true })
        }
    
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
    }


module.exports.memeId=memeId
module.exports.getMemes=getMemes   
module.exports. getDistrictById= getDistrictById
module.exports.getWeather=getWeather
module.exports.getTemp=getTemp
module.exports.getCities=getCities