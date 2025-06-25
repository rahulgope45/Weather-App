import React from 'react'

function HourlyforecastWidget({data}) {

  const{date ,icon ,summary ,temperature, percipitaion ,wind} =data

  console.log(data)
  return (
    <div className='H-widget'>
      <div className='H-day'>{date}</div>
      <div className='H-time'>{date}</div>
      <div className='H-icon-temp'>
        <div className='H-icon'></div>
      </div>

    </div>
  )
}

export default HourlyforecastWidget