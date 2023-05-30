import api from '../api';
import { key } from '../../../key';

export const getWeatherData = async () => {
  const { data } = await api.get(`?key=${key}&user_ip=remote`)
  return data.results;
}

export const getResults = async () => {
  const weatherData = await getWeatherData();
  return weatherData;
}

export const getNextDays = async () => {
  const weatherData = await getWeatherData();
  return weatherData.forecast;
}

export const getNight = async () => {
  const weatherData = await getWeatherData();
  return weatherData.currently === 'night';
}
