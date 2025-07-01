import axios from 'axios';


export async function getWheatherData(
    endpoint,
    place_id
    ,measurementSystem){

        

const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id,
    language: 'en',
    units: measurementSystem
  },
  headers: {
    'x-rapidapi-key': 'f2ef133be3mshca4c1472e199dcfp1f506bjsn78d6dd1fe6c0',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}

}

export async function searchPlaces(text) {
  

const options = {
  method: 'GET',
  url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
  params: {
    text,
    language: 'en'
  },
  headers: {
    'x-rapidapi-key': 'f2ef133be3mshca4c1472e199dcfp1f506bjsn78d6dd1fe6c0',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data
} catch (error) {
	console.error(error);
}
  
}