// by Roberto Aleydon

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/rn-api/?api=posts',
});

export default api;
