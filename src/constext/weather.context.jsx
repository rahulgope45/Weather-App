import React,{ createContext,useEffect,useState } from "react";
import { DEFAULT_PLACE , MEASURMENT_SYSTEMS , UNITS} from "../utils/Pindex";
import { getWheatherData } from "../api";

const WeatherContext = createContext()

function WeatherProvider({children}) {
  const [place,setPlace] = useState(DEFAULT_PLACE)
  const [loading,setLoading] =useState(true)
  const [currentWeather,setCurrentWeather] = useState({})
   const [hourlyForcast,setHourlyForecast] = useState([])
    const [dailyForcast,setDailyForeCast] = useState([])
    const [measurementSystem,setMeasurementSystems] = useState(MEASURMENT_SYSTEMS.AUTO)
    const [units,setUnits] = useState({})


    useEffect(() =>{
      async function _getWheatherData() {

        setLoading(true)

        
           const cw = await getWheatherData('current',place.place_id,measurementSystem)
         setCurrentWeather(cw.current)
         setUnits(UNITS[cw.units])

         const hf = await getWheatherData('hourly',place.place_id,measurementSystem)
         setHourlyForecast(hf.hourly.data)

         const df = await getWheatherData('daily',place.place_id,measurementSystem)
         setDailyForeCast(df.daily.data)
        
        
         
        setLoading(false)
        
      }
      _getWheatherData()
    },[place,measurementSystem])



  return (
    <WeatherContext.Provider value={{place,
    loading,
    currentWeather,
    hourlyForcast,
    dailyForcast,
    measurementSystem
    ,setMeasurementSystems,
    units,
    setPlace,
    }}>
        {children}

    </WeatherContext.Provider>
  )
}

export {WeatherProvider}

export default WeatherContext