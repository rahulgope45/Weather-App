import React,{ createContext,useEffect,useState } from "react";
import { DEFAULT_PLACE } from "../utils/Pindex";
import { getWheatherData } from "../api";

const WeatherContext = createContext()

function WeatherProvider({children}) {
  const [place,setPlace] = useState(DEFAULT_PLACE)
  const [loading,setLoading] =useState(true)
  const [currentWeather,setCurrentWeather] = useState({})
   const [hourlyForcast,setHourlyForecast] = useState([])
    const [dailyForcast,setDailyForeCast] = useState([])


    useEffect(() =>{
      async function _getWheatherData() {

        setLoading(true)

        
           const cw = await getWheatherData('current',place.place_id,'metric')
         setCurrentWeather(cw.current)

         //const hf = await getWheatherData('hourly',place.place_id,'metric')
         //setHourlyForecast(hf.hourly.data)

         //const df = await getWheatherData('daily',place.place_id,'metric')
         //setDailyForeCast(df.daily.data)
        
        
         
        setLoading(false)
        
      }
      _getWheatherData()
    },[place])



  return (
    <WeatherContext.Provider value={{place,loading,currentWeather,hourlyForcast,dailyForcast}}>
        {children}

    </WeatherContext.Provider>
  )
}

export {WeatherProvider}

export default WeatherContext