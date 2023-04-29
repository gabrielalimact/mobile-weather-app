import api from '../api';

export const getResults = async () => {
  const { data } = await api.get('https://api.hgbrasil.com/weather');
  return data.results;
}

export const getNextDays = async () => {
  const { data } = await api.get('https://api.hgbrasil.com/weather');
  return data.results.forecast;
}

export const getToday = async () => {
  const { data } = await api.get('https://api.hgbrasil.com/weather');
  return data.results.forest[0];
}

export const getNight = async () => {
  const { data } = await api.get('https://api.hgbrasil.com/weather');
  return data.results.currently === 'night';
}