import HourlyforecastWidget from './HourlyforecastWidget'
import DailyforecastWidget from './DailyforecastWidget'
import Horizontalscroll from './Horizontalscroll'


function Forcast({title,type,data}) {
  return (
    <div className="Forecast">
        <div className="forecast-container">
            <h3>{title}</h3>
            <Horizontalscroll className="F-wideget-container">
                {data.map((singleData ,index ) =>(
                    <div key={index} >
                        {type === 'hourly' ?(
                                <HourlyforecastWidget data ={singleData}/>
                            ):(<DailyforecastWidget  data ={singleData}/>

                            )}
                    </div>
                ))}
            </Horizontalscroll>
        </div>
        
    </div>
  )
}

export default Forcast