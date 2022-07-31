import axios from 'axios';

export const AxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Credentials': true
    }
  });

  return axiosInstance;
};
