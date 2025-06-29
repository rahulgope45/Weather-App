import React,{ createContext,useState } from "react";
import { DEFAULT_PLACE } from "../utils/Pindex";


const WeatherContext = createContext()

function WeatherProvider({children}) {
  const [place,setPlace] = useState(DEFAULT_PLACE)
  const [loading,setLoading] =useState(true)



  return (
    <WeatherContext.Provider value={{place,loading}}>
        {children}

    </WeatherContext.Provider>
  )
}

export {WeatherProvider}

export default WeatherContext