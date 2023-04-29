import axios from 'axios'

const BASE_URL='https://airbnb19.p.rapidapi.com/api/v1'

const options = {
  url:BASE_URL ,
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  }
};

export const fetchFromAPI=async(url)=>{
    const {data}=await axios.get(`${BASE_URL}/${url}`,options)
    return data
  }
