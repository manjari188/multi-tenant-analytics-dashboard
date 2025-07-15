import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      settings: "Settings",
      darkMode: "Dark Mode",
    },
  },
  fr: {
    translation: {
      dashboard: "Tableau de bord",
      settings: "Paramètres",
      darkMode: "Mode sombre",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
