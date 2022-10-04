var express = require('express');
var router = express.Router();
var apiKey = '68977aa75625a4f44f61cbc548d1cc5c';
var weather = require('openweather-apis')
weather.setLang('en')
weather.setUnits('metric')
weather.setAPPID(apiKey)
/* GET home page. */
router.get('/:city', function(req, res, next) {
  weather.setCity(req.params.city)
  weather.getAllWeather(function(err, JSONObj){
    if (err) {
      weather.setCity('Kyiv')
      weather.getAllWeather(function(err, JSONObj){
        console.log(JSONObj);
        var temp = {
          Now: JSONObj.main.temp,
          Min: JSONObj.main.temp_min,
          Max: JSONObj.main.temp_max
        }
        res.render('index', { title: 'Current Weather', city: JSONObj.name, description: JSONObj.weather[0].description, icon: JSONObj.weather[0].icon , main: temp });
    	});
    } else {
      var temp = {
        now: JSONObj.main.temp,
        min: JSONObj.main.temp_min,
        max: JSONObj.main.temp_max
      }
      console.log();
      res.render('index', { title: 'Current Weather', city: JSONObj.name, description: JSONObj.weather[0].description, icon: JSONObj.weather[0].icon , main: temp });
    }
	});
});
router.get('/', (req, res) => {
  res.redirect('/Kyiv');
});
module.exports = router;
