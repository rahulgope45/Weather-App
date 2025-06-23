import { getCurrentWheather } from '../api'
function Weatherapp(){

    const data = getCurrentWheather()
    console.log(data)



    return(
        <>
        <h1>hello</h1>
        </>
    )
}

export default Weatherapp