import axios from 'axios';

function API() {
  return axios.create({
    baseURL: 'https://template.aeb-it.ru',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
}

export function GetCSRF() {
  return API().get(`auth/csrf-cookie`).then();
}

export default API();
