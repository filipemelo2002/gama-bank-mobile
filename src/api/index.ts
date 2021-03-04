import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from '../redux'
import { showError } from '../services/showToast'
const api = axios.create({
  baseURL: 'https://accenture-java-desafio.herokuapp.com/'
});
api.interceptors.request.use(async (request: AxiosRequestConfig) => {
  const token = await AsyncStorage.getItem('@Gamabank:Token');
  if (
    request.url !== 'login' &&
    request.url !== 'nova-senha' &&
    request.url !== 'usuarios' &&
    !request.url?.includes('altera-senha')
  ) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    showError(error.response?.data.error);
    if (error.response?.data.error.includes('JWT')) {
      await AsyncStorage.clear();
      store.dispatch({type: "RESET"});
    }
    throw error;
  },
);
export default api;