import React from 'react'
import Weatheicon from './Weatheicon'

function HourlyforecastWidget({data}) {

  const{date ,icon ,summary ,temperature, precipitation ,wind} =data

  console.log(data)


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
  }).format(new Date(date)),
  time: new Intl.DateTimeFormat(navigator.language,{
    hour: "2-digit",
    minute: '2-digit'
  }).format(new Date(date).setMinutes(0))
}

Weather_Date.day = Weather_Date.day === now_Date.day && Weather_Date.time === now_Date.time? 'Current' : Weather_Date.day;


  return (
    <div className='H-widget'>
      <div className='H-icon'>
          <Weatheicon iconnumber={icon} alt={summary}/>
        </div>
        <div className='H-temperature'>
         <h2>  {Math.round(temperature)} °C</h2> 
        </div>
        <div className='H-percipitation'>
          <p>{Math.round(precipitation.total)} mm/h</p> 
        </div>
        <div className='H-wind'>
          <p>{Math.round(wind.speed)}mph</p>
          <div className='H-direction' style={{transform: `rotate(${-45 + wind.angle}deg)`}}>
            <i class="bi bi-send-fill"></i></div>
        </div>
        
      <div className='H-day'><p>{Weather_Date.day} </p> </div>
      <div className='H-time'>{Weather_Date.time}</div>
      <div className='H-icon-temp'>
        
      </div>

    </div>
  )
}

export default HourlyforecastWidget