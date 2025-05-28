// RootStack.tsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootStack = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <MainStack /> : <AuthStack />;
};

export default RootStack;
