import { getCurrentWheather } from '../api'
import React,{useState,useEffect} from 'react'
function Weatherapp(){

    
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getCurrentWheather(); // if getCurrentWheather is async
      setWeatherData(data);
    };

    fetchWeather();
  }, []);

  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

    
     const{icon_num,feels_like,summary,wind,cloud_cover,precipitation,humidity,temperature,
        uv_index,visibility

    }=weatherData

      const units = {
    precipitation: 'mm',
    wind_speed: 'km/h',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
    visibility: 'km',
  };

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
            <img src={`dist/weather_icons/set03/big/${weatherData.icon_num}.png`}
            alt='Weather-icon'/>
        </div>
        <div className='value-summary'>
            <div className='value-temp'>
               <h1>{weatherData.temperature} °C</h1>
            </div>
            <div className='value-Feelslike'>
               <h3>Feelslike {weatherData.feels_like} °C</h3>

            </div>
            <div className='value-summarytext'>
                <h3>{weatherData.summary}</h3>
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