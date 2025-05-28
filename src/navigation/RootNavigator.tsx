import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import RootStack from './ RootStack'; // 👈 remove space before RootStack
import { navigationRef } from '../services/navigationService';
import { ActivityIndicator, View } from 'react-native';

export const NavigatorContent = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <RootStack />;
};

const RootNavigator = () => (
  <AuthProvider>
    <NavigationContainer ref={navigationRef}>
      <NavigatorContent />
    </NavigationContainer>
  </AuthProvider>
);

export default RootNavigator;
