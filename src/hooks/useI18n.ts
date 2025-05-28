import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useI18n = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(i18n.isInitialized);

  useEffect(() => {
    if (i18n.isInitialized) {
      setCurrentLanguage(i18n.language);
      setIsReady(true);
    } else {
      const onInitialized = () => {
        setCurrentLanguage(i18n.language);
        setIsReady(true);
        i18n.off('initialized', onInitialized); // remove listener after called
      };

      i18n.on('initialized', onInitialized);

      return () => {
        i18n.off('initialized', onInitialized); // cleanup listener on unmount
      };
    }
  }, [i18n]);

  const changeLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    isReady,
  };
};

export default useI18n;