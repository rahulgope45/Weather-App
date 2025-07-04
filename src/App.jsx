import React,{useState,useContext} from 'react'
import './App.css'
import './componnets/components.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Forcast from './componnets/forcast';
import ThemeContext from './constext/theme.context';
import Loader from './componnets/Loader';


import Weatherapp from './componnets/wreatherapp'
import Header from './componnets/header'

import WeatherContext from './constext/weather.context';

function App() {

  const {darkMode} = useContext(ThemeContext)
  const {loading,currentWeather,hourlyForcast,dailyForcast} =useContext(WeatherContext)

  // const [screen,setScreen] =useState(false)

  // const ToogleText = () => setScreen(prev => !prev) 

  


  return (
    <div className= {`App-${darkMode ? 'dark' : 'light'}`}>
      <Header  />
     {loading ?(
      <Loader/>
    ):(
      <>
    
    <Weatherapp data={currentWeather}/>
    <Forcast type='hourly' title ='HOURLY FORECAST' data={hourlyForcast}/>
    <Forcast type='dail' title ='21 DAYS FORECAST'  data={dailyForcast}/>
     
   
      </>
    )}

   
    

    </div>
      
  )
}

export default App
