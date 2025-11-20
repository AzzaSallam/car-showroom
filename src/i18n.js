import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/common.json";
import ar from "./locales/ar/common.json";

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ar: { translation: ar },
      },
      lng: "en", 
      fallbackLng: "en",
      interpolation: { escapeValue: false },
    });
}

if (typeof document !== "undefined") {
  document.documentElement.lang = "en";
  document.documentElement.dir = "ltr";
}

export default i18next;
