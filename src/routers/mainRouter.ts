// routes/mainRouter.ts

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingScreen';

export type MainStackParamList = {
  HomeScreen: undefined;
  SettingScreen: undefined;
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
  SettingScreen: {
    component: SettingsScreen,
    options: { title: 'Setting' },
  },
};
