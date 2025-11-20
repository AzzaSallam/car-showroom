//* This is a simple component whose purpose is to load the translation the first time.
//* That is, as soon as the layout is run, this file ensures that i18n is imported and executed.

"use client";

import { useEffect } from "react";
import i18n from "../i18n";

export default function InitI18n() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("i18n initialized:", i18n.language);
    }
  }, []);

  return null;
}
