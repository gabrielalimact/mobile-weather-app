import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/results',
});

export default instance;

export const getResults = async () => {
  const { data } = await instance.get('http://localhost:3000/results');
  return data;
}

export const getNextDays = async () => {
  const { data } = await instance.get('http://localhost:3000/results');
  return data.forecast;
}

export const getToday = async () => {
  const { data } = await instance.get('http://localhost:3000/results');
  return data.forest[0];
}

export const getNight = async () => {
  const { data } = await instance.get('http://localhost:3000/results');
  return data.currently === 'night';
}