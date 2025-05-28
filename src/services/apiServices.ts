import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { storage } from '../utils/storage';
import { navigate } from './navigationService';


const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000,
});

// ✅ Correct request interceptor with AxiosHeaders typing
 axiosInstance.interceptors.request.use(
   async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = await storage.getItem('token');
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

// ✅ Optional response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error: AxiosError): Promise<AxiosError> => {
    if (error.response?.status === 401) {
      console.error('Unauthorized. Redirecting to login...');
      navigate('Login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
