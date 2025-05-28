import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routers/rootRouter';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { storage } from '../../utils/storage';

const SplashScreen = () => {
    type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

    const navigation = useNavigation<NavigationProp>();


    useEffect(() => {
        const init = async () => {
            try {
                const isAuthenticated = await storage.getIsAuthenticated();
            
                if (!isAuthenticated) {
                    navigation.navigate('AuthStack', {screen: 'Login'});
                } else {
                    navigation.navigate('MainStack', {screen: 'HomeScreen'});
                }
            } catch (err) {
                console.error('Auth check error:', err);
            }
        };

        init().then(r => r);
    }, [navigation]);

    return <View><ActivityIndicator/></View>;
};

export default SplashScreen;
