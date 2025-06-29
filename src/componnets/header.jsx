import './components.css';
import Place from './Place';
import Search from './Search';
import Settings from './Settings';



import React from 'react'

function Header({screen}) {

  
  return (
    <div className="Header-container">
        <Place/>
        <Search/>
        <Settings/>
        </div>
  )
}

export default Header
