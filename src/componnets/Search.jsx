import React from 'react'
import './Search.css';

function Search() {
  return (
    <div className='Search-container'>
      <div className='search-icons'>
        <i  class="bi bi-search"></i>
      </div>
      <div className='search-input'>
        <input type='text' placeholder='Search City...' className='SearchCity' ></input>
      </div>
      

    </div>
  )
}

export default Search