import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cccc/v1',
});

export default instance;
