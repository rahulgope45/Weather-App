import React,{useState} from 'react'
import './Search.css';



function Settings() {


const [darkMode,setdarkMode] = useState(false)

const toogleTheme =()=>{
  setdarkMode(prev => !prev)
}

  return (
    <div className='Settings-container'>
      <div className='Theme-Toggler' onClick={toogleTheme}>
        {darkMode ?(
           <div className='Light-theme-button active'>
          <i className="bi bi-brightness-high-fill"></i>

        </div>
        ):(
          <div className='Dark-theme-button active'>
          <i className="bi bi-moon-fill"></i>

        </div>
        )}
       
        
        
      </div>
      <div className='Settings-Button'>
          <i className="bi bi-gear"></i>
        </div>
    </div>
  )
}

export default Settings