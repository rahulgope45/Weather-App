import React,{useState} from 'react'
import './App.css'
import Weatherapp from './componnets/wreatherapp'

function App() {

  const [screen,setScreen] =useState(false)

  const ToogleText = () => setScreen(prev => !prev) 

  


  return (
    <div className= {screen ? 'App-dark' : 'App-light'}>
      <button onClick={ToogleText} >{screen ? 'Light Mode' : 'Dark Mode'}</button>
    <Weatherapp/>
    </div>
      
  )
}

export default App
