import axios from 'axios';

const API_KEY = '818fada706fe94b962816d87a871823f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us&mode=json`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
