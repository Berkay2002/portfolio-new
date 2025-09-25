"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/layout/language-provider";

export function HtmlLangSetter() {
  const { locale } = useLanguage();

  useEffect(() => {
    if (locale && document.documentElement) {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}
