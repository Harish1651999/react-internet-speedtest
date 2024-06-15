// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../assets/translations/en.json";
import es from "../assets/translations/es.json";
import fr from "../assets/translations/fr.json";

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
