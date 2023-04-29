import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather',
});

export default instance;