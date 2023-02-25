import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { TRANSLATIONS_BR } from './br/translations';
import { TRANSLATIONS_EN } from './en/translations';

const LOCALE_EN = 'en';
const LOCALE_BR = 'br';

//eslint-disable-next-line
const LOCALES = [LOCALE_EN, LOCALE_BR];
const DEFAULT_LOCALE = LOCALE_EN;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: LOCALE_BR,
    fallbackLng: DEFAULT_LOCALE,
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      br: {
        translation: TRANSLATIONS_BR,
      },
    },
  });

export default i18n;
