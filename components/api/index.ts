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

export async function GetUser() {
  const isXSRF = document.cookie
    .split('; ')
    .map((c) => {
      const key = c.split('=')[0];
      const value = c.split('=')[1];
      return { key, value };
    })
    .some((c) => c.key === 'XSRF-TOKEN');

  if (isXSRF) {
    return API().get('auth/user');
  }
  return Promise.all([
    await API().get(`auth/csrf-cookie`),
    await API().get('auth/user'),
  ]);
}

export default API();
