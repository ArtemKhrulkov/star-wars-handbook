import axios, { AxiosError } from 'axios';
import { message } from 'antd';

export const Api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

Api.interceptors.request.use(undefined, (error: AxiosError) => {
  message.error(error.message);
  return Promise.reject();
});

Api.interceptors.response.use(undefined, (error: AxiosError) => {
  message.error(error.message);
  return Promise.reject();
});
