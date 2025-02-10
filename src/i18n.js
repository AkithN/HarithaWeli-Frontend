import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Calculator": "Calculator",
      "Shop": "Shop",
      "About Us": "About Us",
    },
  },
  si: {
    translation: {
      "Home": "මුල් පිටුව",
      "Calculator": "ගණනය",
      "Shop": "සාප්පුව",
      "About Us": "අපි ගැන",
    },
  },
  ta: {
    translation: {
      "Home": "முகப்பு",
      "Calculator": "கணிப்பான்",
      "Shop": "கடைகள்",
      "About Us": "எங்களை பற்றி",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
