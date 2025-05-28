// routes/authRoutes.ts

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login';

export type AuthStackParamList = {
  Login: undefined;
//   Register: undefined;
};

interface RouteConfig {
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

export const authRoutes: Record<keyof AuthStackParamList, RouteConfig> = {
  Login: {
    component: LoginScreen,
    options: { title: 'Login' },
  },
};
