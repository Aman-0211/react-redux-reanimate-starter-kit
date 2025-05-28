// RootStack.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './AuthStack';
import MainStack from './MainStack';
import SplashScreen from '../screens/SplashScreen';
import { RootStackParamList } from '../routers/rootRouter';
import { navigationRef } from '../services/navigationService';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <RootStack.Screen name="Splash" component={SplashScreen}/>
                <RootStack.Screen name="AuthStack" component={AuthStack}/>
                <RootStack.Screen name="MainStack" component={MainStack}/>
            </RootStack.Navigator>
        </NavigationContainer>

    );
};

export default RootNavigator;
