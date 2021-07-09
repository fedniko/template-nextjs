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

export function GetUser() {
  const isXSRF = document.cookie
    .split('; ')
    .map((c) => {
      const key = c.split('=')[0];
      const value = c.split('=')[1];
      return { key, value };
    })
    .some((c) => c.key === 'XSRF-TOKEN');

  if (isXSRF) {
    console.log('XSRF EXIST');
    return API().get('auth/user').then();
  }
  console.log('XSRF DOENST EXIST');
  return axios
    .all([API().get(`auth/csrf-cookie`), API().get('auth/user')])
    .then();
}

export default API();
