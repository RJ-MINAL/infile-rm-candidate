import axios from 'axios';

const API = {};
API.USUARIOS = 'https://candidates-exam.herokuapp.com/api/v1/usuarios';
API.LOGIN = 'https://candidates-exam.herokuapp.com/api/v1/auth/login';

function setJwt(jwt) {
  axios.defaults.headers.common['Authorization'] = jwt;
}

const objExported = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  API: API,
  setJwt,
};

export default objExported;
