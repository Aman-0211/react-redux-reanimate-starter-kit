import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import RootStack from './ RootStack'; // 👈 remove space before RootStack

const RootNavigator = () => (
  <AuthProvider>
      <RootStack />
  </AuthProvider>
);

export default RootNavigator;
