import React from 'react'
import './Search.css';

function Settings() {
  return (
    <div className='Settings-container'>
      <div className='Theme-Toggler'>
        <div className='Light-theme-button active'>
          <i class="bi bi-brightness-high-fill"></i>

        </div>
        <div className='Dark-theme-button'>
          <i class="bi bi-moon-fill"></i>

        </div>
        
      </div>
      <div className='Settings-Button'>
          <i class="bi bi-gear"></i>
        </div>
    </div>
  )
}

export default Settings