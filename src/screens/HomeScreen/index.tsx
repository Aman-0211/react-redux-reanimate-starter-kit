import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  Easing,
  withDelay,
} from 'react-native-reanimated';
import useI18n from '../../hooks/useI18n';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const { t, isReady } = useI18n();
  const navigation = useNavigation<any>();
  const welcomeOpacity = useSharedValue(0);
  const welcomeTranslateY = useSharedValue(20);

  const subtitleScale = useSharedValue(0);

  const buttonTranslateY = useSharedValue(100);

  useEffect(() => {
    welcomeOpacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });
    welcomeTranslateY.value = withTiming(0, {
      duration: 800,
      easing: Easing.out(Easing.exp),
    });

    subtitleScale.value = withDelay(
      500,
      withTiming(1, {
        duration: 600,
        easing: Easing.out(Easing.cubic),
      }),
    );


    buttonTranslateY.value = withSpring(0, {
      damping: 10,
      stiffness: 100,
    });
  }, []);

  const welcomeStyle = useAnimatedStyle(() => ({
    opacity: welcomeOpacity.value,
    transform: [{ translateY: welcomeTranslateY.value }],
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: subtitleScale.value }],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: buttonTranslateY.value }],
  }));

    if (!isReady) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.title, welcomeStyle]}>
       {t('welcome')}
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, subtitleStyle]}>
        {t('subtitle')}
      </Animated.Text>

      <Animated.View style={[styles.buttonContainer, buttonStyle]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainStack',{ screen: 'SettingScreen'})}>
          <Text style={styles.buttonText}>{t('continue')}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F6FC',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HomeScreen;
