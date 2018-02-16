const key = process.env.OPEN_WEATHER_MAP_KEY;
const location = process.argv[2];

const request = require('request');
request(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${key}`, function (error, response, body) {
  // console.dir(JSON.parse(body), {depth:5});
  if (JSON.parse(body).main) {
    console.log(JSON.parse(body).main.temp);
  } else {
    console.log("City not found");
  }
});
