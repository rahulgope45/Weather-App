import React from 'react'

function Weatheicon({iconnumber,summary}) {
  return (
    
         <img src={`dist/weather_icons/set03/big/${iconnumber}.png`}
            alt={summary}
            draggable={false}/>
    
  )
}

export default Weatheicon