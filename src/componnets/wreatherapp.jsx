
import Weatheicon from './Weatheicon';
import WeatherContext from '../constext/weather.context';
import { useContext } from 'react';

function Weatherapp({data}){

    

    
     const{icon_num,summary,wind,cloud_cover,precipitation,humidity,temperature,
        uv_index,visibility,feels_like

    }=data

const {units} =useContext(WeatherContext)

    const otherInfoWidgets = [
    {
      id: 0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: units.humidity,
    },
    {
      id: 3,
      icon: 'sunglasses',
      name: 'UV index',
      value: Math.round(uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: 'clouds-fill',
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: units.visibility,
    },
  ];
    

      




    return(
        <div className='Main-Container'>
        < div className='Temperature'>
        <div className='weather-icons'>
           
            <Weatheicon iconnumber={icon_num} alt={summary}/>
        </div>
        <div className='value-summary'>
            <div className='value-temp'>
               <h1>{temperature} {units.temperature}</h1>
            </div>
            <div className='value-Feelslike'>
               <h3>Feelslike {feels_like} {units.temperature}</h3>

            </div>
            <div className='value-summarytext'>
                <h3>{summary}</h3>
            </div>
        </div>
        </div>
        <div className='other-Info'>
            {otherInfoWidgets.map(({id,icon,name,value,unit} )=>
                <div className='widget' key={id}>
                  <div className='widget-conatiner'>
                    <div className='info'>
                        <div className='icon'>
                            <i className={`bi bi-${icon}`}></i>

                        </div>
                        <div className='value-info'>
                            <p>{name}</p>
                           <p>{value} {unit}</p> 
                            </div>

                    </div>
                    
                    </div>   
                </div>
            )}
        </div>
        </div>
        
    )
}

export default Weatherapp