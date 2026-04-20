// we have to build the function that take the weather to us 
// user can ask the mumbai and the lacknow 
// so we haveot find the all the weather  
// for the current date we have to weithe the today and for the future we can give the date 


async function getWeather(location) {
  const weatherInfo = [];
  for (const { city, date } of location) {
    if (date.toLowerCase() == 'today') {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=21c156742b3044f6b34170733250111&q=${city}&aqi=no`);
      const data = await response.json();
      weatherInfo.push(data);
    }
    else {
      const response = await fetch(`http://api.weatherapi.com/v1/future.json?key=21c156742b3044f6b34170733250111&q=London&dt=${date}`);
      const data = await response.json();
      weatherInfo.push(data);
    }
  }
  return weatherInfo;
}

module.exports = getWeather;