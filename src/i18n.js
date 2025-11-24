"use client";

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

      fallbackLng: "ar",
      interpolation: { escapeValue: false },
    });
}


export default i18next;