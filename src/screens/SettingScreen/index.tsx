import React from 'react';
import { View, Text, Button } from 'react-native';
import useI18n from '../../hooks/useI18n'; // Adjust the import path as necessary

const SettingsScreen = () => {
  const { t, currentLanguage, changeLanguage } = useI18n();

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Text>Current Language: {currentLanguage}</Text>

      <Button title="Switch to French" onPress={() => changeLanguage('fr')} />
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
    </View>
  );
};

export default SettingsScreen;
