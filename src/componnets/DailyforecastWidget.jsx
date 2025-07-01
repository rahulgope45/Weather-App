import React, { useContext } from 'react'
import Weatheicon from './Weatheicon'
import WeatherContext from '../constext/weather.context'



function DailyforecastWidget({data}) {
const {units} =useContext(WeatherContext)
  const{day, weather, icon, summary, precipitation
,temperature_max,temperature_min

} =data


//console.log(data)

  //date format
const now_Date= {
  day: new Intl.DateTimeFormat(navigator.language , {
    weekday : 'short',
    day: '2-digit',
    month: '2-digit'
  }).format(new Date()),
  time: new Intl.DateTimeFormat(navigator.language,{
    hour: "2-digit",
    minute: '2-digit'
  }).format(new Date().setMinutes(0))
}

const Weather_Date= {
  day: new Intl.DateTimeFormat(navigator.language , {
    weekday : 'short',
    day: '2-digit',
    month: '2-digit'
  }).format(new Date(day)),
  time: new Intl.DateTimeFormat(navigator.language,{
    hour: "2-digit",
    minute: '2-digit'
  }).format(new Date(day).setMinutes(0))
}

Weather_Date.day = Weather_Date.day === now_Date.day ? 'Current' : Weather_Date.day;

  return (
      <div className='D-widget'>
        <div className='H-day'><b>{Weather_Date.day} </b> </div>
        <br/>
      <div className='D-icon'>
          <Weatheicon iconnumber={icon} alt={summary}/>
        </div>
        <div className='D-temperature'>
          <div className='D-temp-max'>
            <h3>Max :{Math.round(temperature_max)} {units.temperature}</h3> 
          </div>
          <div className='D-temp-min'>
            <h3>Min :{Math.round(temperature_min)} {units.temperature}</h3> 
          </div>
         
        </div>
        <div className='H-percipitation'>
          <p>  {Math.round(precipitation.total)} {units.precipitation}</p> 
        </div>
        
      
    </div>
  )
}

export default DailyforecastWidget