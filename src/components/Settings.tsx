import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import React from 'react';


export default function SettingsPage() {
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{t('settings')}</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
        <label className="flex items-center space-x-4">
          <span className="text-gray-900 dark:text-gray-100">{t('darkMode')}</span>
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
            className="w-5 h-5"
          />
        </label>
        <button
          onClick={toggleLanguage}
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded"
        >
          Switch to {i18n.language === 'en' ? 'Français' : 'English'}
        </button>
      </div>
    </div>
  );
}
