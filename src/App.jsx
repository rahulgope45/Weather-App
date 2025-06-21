import React,{useState} from 'react'
import './App.css'


import Weatherapp from './componnets/wreatherapp'
import Header from './componnets/header'

function App() {

  const [screen,setScreen] =useState(false)

  const ToogleText = () => setScreen(prev => !prev) 

  


  return (
    <div className= {screen ? 'App-dark' : 'App-light'}>
     
    <Header screen={screen} />
     <button onClick={ToogleText} >{screen ? 'Light Mode' : 'Dark Mode'}</button>
    <Weatherapp/>

    </div>
      
  )
}

export default App
