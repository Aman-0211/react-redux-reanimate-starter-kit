// routes/mainRouter.ts

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

export type MainStackParamList = {
  HomeScreen: undefined;
//   Register: undefined;
};

interface RouteConfig {
  component: React.ComponentType<any>;
  options?: NativeStackNavigationOptions;
}

export const mainRoutes: Record<keyof MainStackParamList, RouteConfig> = {
  HomeScreen: {
    component: HomeScreen,
    options: { title: 'Home' },
  },
};
