import React from 'react'

function Weatheicon({iconnumber,summary}) {
  return (
    
         <img src={`weather_icons/set03/big/${iconnumber}.png`}
            alt={summary}
            draggable={false}/>
    
  )
}

export default Weatheicon