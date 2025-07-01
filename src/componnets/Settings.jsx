import React,{useState,useContext} from 'react'
import './Search.css';
import ThemeContext from '../constext/theme.context';
import { Themeprovider } from '../constext/theme.context';
import { MEASURMENT_SYSTEMS } from '../utils/Pindex';
import WeatherContext from '../constext/weather.context';




function Settings() {

  const [openSettings,setSettings] = useState(false)
   console.log('openSettings:', openSettings)

   const {measurementSystem,setMeasurementSystems} = useContext(WeatherContext)

   const changeMeasurementSystem = (system) =>{
    setMeasurementSystems(system)
    setSettings(false)

   }


const { darkMode, setdarkMode } = useContext(ThemeContext);

const toogleTheme =()=>{
  //console.log('setDarkMode' ,setdarkMode)
  
  if(typeof setdarkMode == 'function'){
    setdarkMode(prev => !prev)
  }else{
    console.error('error')
  }
}




  return (
    <div className='Settings-container'>
      <div className='Theme-Toggler' onClick={toogleTheme}>
        {darkMode ?(
           <div className={`Light-theme-button theme-toggle-animate ${darkMode ? '' : 'active'}`}>
          <i className="bi bi-brightness-high-fill"></i>

        </div>
        ):(
          <div className={`Dark-theme-button theme-toggle-animate ${darkMode ? 'active' :'' }`}>
          <i className="bi bi-moon-fill"></i>

        </div>
        )}
       
        
        
      </div>
      <div className='Settings-Button' onClick={() => setSettings(prevVal => !prevVal)}>
        
          <i className={`bi bi-gear${openSettings ?  '-fill' : ''}`}></i>
        </div>
      <div className={`settings-menu ${openSettings ?  "open" : ""}`}>
       

        <div className='measurement-system'>
          <h4>Measurement Systems</h4>
           <div className='systems'>
            {Object.values(MEASURMENT_SYSTEMS).map(system =>
              <div className={`system ${system === measurementSystem ? 'active' : ''}`} 
              key={system}
              onClick={() => changeMeasurementSystem(system)}>
                {system}
                </div>
            )}

           </div>
        </div>
      </div>
    </div>
  )
}

export default Settings