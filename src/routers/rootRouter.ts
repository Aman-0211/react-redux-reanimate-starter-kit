import {NavigatorScreenParams} from '@react-navigation/native';
import {AuthStackParamList} from './authRoutes';
import {MainStackParamList} from './mainRouter';

export type RootStackParamList = {
    Splash: undefined;
    AuthStack: NavigatorScreenParams<AuthStackParamList>;
    MainStack: NavigatorScreenParams<MainStackParamList>;
};
