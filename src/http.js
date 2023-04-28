import axios from 'axios';

export default axios.create({
  baseURL: 'https://sheinko.tk',
  headers: {
    'Content-type': 'application/json',
  },
});
