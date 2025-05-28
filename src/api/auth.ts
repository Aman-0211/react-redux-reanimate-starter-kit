import { AuthResponse, ILoginPayload } from '../redux/auth/type';
import axiosInstance from '../services/apiServices';



export const login = async (data: ILoginPayload): Promise<AuthResponse> => {
    console.log('Login data:', data);
    
  const response = await axiosInstance.post<AuthResponse>('/auth/login', data);
  return response.data;
};