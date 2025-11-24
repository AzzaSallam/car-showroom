"use client";
import { useEffect } from "react";
import i18next from "../initI18n";

export default function DirectionController() {
  useEffect(() => {
    const lang = i18next.language;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, []);

  return null;
}