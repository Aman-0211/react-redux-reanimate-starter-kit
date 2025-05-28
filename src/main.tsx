import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './redux/store';
import {AuthProvider} from './context/AuthContext';
import RootNavigator from './navigation/RootNavigator';

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AuthProvider>
            <RootNavigator />
        </AuthProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default Main;
