
    import React, { useState } from 'react';
    import { View, TextInput, ActivityIndicator, Text, StyleSheet, TouchableOpacity } from 'react-native';
    import { useDispatch, useSelector } from 'react-redux';
    import { loginRequest } from '../../redux/auth/authSlice';
    import { RootState, AppDispatch } from '../../redux/store';
    import { useNavigation } from '@react-navigation/native';
    import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
    import { RootStackParamList } from '../../routers/rootRouter';


    const LoginScreen: React.FC = () => {
      const [username, setUsername] = useState<string>('');
      const [password, setPassword] = useState<string>('');
      const dispatch = useDispatch<AppDispatch>();
      const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
      const { loading, error } = useSelector((state: RootState) => state.auth);
    
      const handleLogin = () => {
        dispatch(loginRequest({ username, password }));
        navigation.navigate('MainStack', {screen: 'HomeScreen'});
      };
    
      return (
        <View style={styles.container}>
          <View style={styles.inputView}>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          </View>
          <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          </View>
          <TouchableOpacity onPress={handleLogin} style={styles.loginBtn} disabled={loading}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
          {loading && <ActivityIndicator />}
          {error && <Text>{error}</Text>}
        </View>
      );
    };
    
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
    width: 250,
    height: 100,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#EAEAEA',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#777777',
    fontWeight: '800',
  },
  singUp: {
    color: '#39B54A',
    fontWeight: '500',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#39B54A',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: '#ffffff',
    fontWeight: '800',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logoView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    marginTop: 0,
  },
  forgot: {
    fontWeight: 'normal',
  },
});