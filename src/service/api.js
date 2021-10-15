import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather'
const API_KEY='ebe919bf5a557d88f1446786417343c6'

export const getData=async(city,country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}
