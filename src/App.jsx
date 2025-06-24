import React,{useState} from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Forcast from './componnets/forcast';


import Weatherapp from './componnets/wreatherapp'
import Header from './componnets/header'
import { getDailyForecast ,getHourlyForecast } from './api';

function App() {

  const [screen,setScreen] =useState(false)

  const ToogleText = () => setScreen(prev => !prev) 

  


  return (
    <div className= {screen ? 'App-dark' : 'App-light'}>
     
    <Header screen={screen} />
     <button onClick={ToogleText} >{screen ? 'Light Mode' : 'Dark Mode'}</button>
    <Weatherapp/>
    <Forcast type='hourly' title ='HOURLY FORECAST' data={getHourlyForecast()}/>
    <Forcast type='dail' title ='21 DAYS FORECAST'  data={getDailyForecast()}/>
    

    </div>
      
  )
}

export default App
