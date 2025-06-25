import React from 'react'
import Weatheicon from './Weatheicon'

function HourlyforecastWidget({data}) {

  const{date ,icon ,summary ,temperature, precipitation ,wind} =data

  console.log(data)
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
        
      <div className='H-day'><p>{date} </p> </div>
      <div className='H-time'>{date}</div>
      <div className='H-icon-temp'>
        
      </div>

    </div>
  )
}

export default HourlyforecastWidget