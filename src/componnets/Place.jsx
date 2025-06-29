import React, { useContext } from 'react'
import WeatherContext from '../constext/weather.context'

 function Place  ()  {

const {place} = useContext(WeatherContext)

  return (
    <div className='Palce-container'>
      <i class="bi bi-geo-alt-fill"></i>
      <b>{place.name}</b>,{' '} {place.country}
    </div>
  )
}

export default Place
