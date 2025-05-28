// navigation/MainStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainRoutes, MainStackParamList } from '../routers/mainRouter';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: true }}>
      {Object.entries(mainRoutes).map(([name, config]) => (
        <Stack.Screen
          key={name}
          name={name as keyof MainStackParamList}
          component={config.component}
          options={config.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
