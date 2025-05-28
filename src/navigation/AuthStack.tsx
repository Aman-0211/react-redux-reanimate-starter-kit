// navigation/AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authRoutes, AuthStackParamList } from '../routers/authRoutes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  const initialScreen: keyof AuthStackParamList = 'Login';

  return (
    <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
      {Object.entries(authRoutes).map(([name, config]) => (
        <Stack.Screen
          key={name}
          name={name as keyof AuthStackParamList}
          component={config.component}
          options={config.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStack;
