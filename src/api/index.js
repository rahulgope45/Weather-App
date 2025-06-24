import currentweather from './current-weather.json'
import dailyforecast from './daily-forecast.json'
import hourlyforecast from './hourly-forecast.json'

function getCurrentWheather(){
    return currentweather.current
}

function getDailyForecast(){
    return dailyforecast.daily.data
}

function getHourlyForecast(){
    return hourlyforecast.hourly.data
}

export { getCurrentWheather , getDailyForecast ,getHourlyForecast }