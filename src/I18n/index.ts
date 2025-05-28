import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ModuleType } from 'i18next';

import en from '../locales/en.json';
import fr from '../locales/fr.json';
import { storage } from '../utils/storage';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  detect: (cb: (lang: string) => void) => {
    storage.getLanguage().then((lang) => {
      cb(lang || 'en');
    });
  },
  init: () => {},
    cacheUserLanguage: (lang: string) => {
        storage.setLanguage(lang);
    },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
