import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'AUTH_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
  USER_PROFILE: 'USER_PROFILE',
  IS_ONBOARDED: 'IS_ONBOARDED',
  THEME: 'THEME',
  LANGUAGE: 'LANGUAGE',
};

export const storage = {
  // Generic function of async storage operations
  // Set a string value
  setItem: async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(`setItem error: ${key}`, e);
    }
  },

  // Get a string value
  getItem: async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error(`getItem error: ${key}`, e);
      return null;
    }
  },

  // Set a JSON object
  setJson: async (key: string, value: unknown) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`setJson error: ${key}`, e);
    }
  },

  // Get a parsed JSON object
  getJson: async <T = any>(key: string): Promise<T | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error(`getJson error: ${key}`, e);
      return null;
    }
  },

  // Remove an item
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.error(`removeItem error: ${key}`, e);
    }
  },

  // Set multiple items: [['key1', 'value1'], ['key2', 'value2']]
  setMulti: async (items: [string, string][]) => {
    try {
      await AsyncStorage.multiSet(items);
    } catch (e) {
      console.error('setMulti error:', e);
    }
  },

  // Get multiple items: ['key1', 'key2']
  getMulti: async (keys: string[]) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.error('getMulti error:', e);
      return [];
    }
  },

  // Remove multiple items: ['key1', 'key2']
  removeMulti: async (keys: string[]) => {
    try {
      await AsyncStorage.multiRemove(keys);
    } catch (e) {
      console.error('removeMulti error:', e);
    }
  },

  // Clear everything
  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('clearAll error:', e);
    }
  },

//   Get Access Token
  getAccessToken: async (): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (e) {
      console.error('getAccessToken error:', e);
      return null;
    }
  },

//   Set Access Token
  setAccessToken: async (token: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
    } catch (e) {
      console.error('setAccessToken error:', e);
    }
  }
};
