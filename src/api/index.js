import axios from 'axios';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const fetchData = url => {
  return axios.get(url);
};
