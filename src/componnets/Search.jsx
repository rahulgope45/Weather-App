import React, { useContext, useState } from 'react'
import './Search.css';
import { searchPlaces } from '../api';
import WeatherContext from '../constext/weather.context';

function Search() {

const [text,setText] = useState('')
const  [searchResults,setSearchResult] = useState([])
const {setPlace} = useContext(WeatherContext)
const [openSearchResult,setOpenSearchResult] = useState(false)

async function onSearch (e){
  setText(e.target.value)
   const data = await searchPlaces(e.target.value)
   setSearchResult(data)
    setOpenSearchResult(data.length)
}

const changePlace = (place) =>{
  setPlace(place)
  setText('')
  setOpenSearchResult(false)

}

  return (
    
    <div className='Search-container' style={{ position: 'relative', width: '100%' }}>
      <div className='search-icons'>
        <i  class="bi bi-search"></i>
      </div>
      <div className='search-input'>
        <input type='text' placeholder='Search City...' className='SearchCity' 
        value={text}
        onChange={onSearch}/>
      </div>
      {
        openSearchResult &&(
              <div className='search-result'>
        <div className='result-container'>
          
           {
            searchResults.map((place) =>(
               <div className='result' key={place.place_id} onClick={() =>changePlace(place)}>
                {place.name},{place.adm_areal},{place.country}
               </div>
            ))
           }
          
        </div>
      </div>
        )
      }
  
      

    </div>
  )
}

export default Search