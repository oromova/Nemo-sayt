import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector';
import uzLang from '../public/languages/uz.json';
import ruLang from '../public/languages/ru.json';
import enLang from '../public/languages/en.json';
import i18next from 'i18next';

const laungages = localStorage.getItem('i18nextLng') || "uz";

i18next
  .use(Backend)
  .use(laungageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'uz',
    lng: laungages,
    debug: true,
    resources: {
      uz: { translation: uzLang },
      en: { translation: enLang },
      ru: { translation: ruLang }
    }
  });
export default i18next;