"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Locale } from "@/types";
import translations from "@/lib/translations";

// Helper function to get a nested translation value
export function getTranslation(obj: any, path: string): string {
  const keys = path.split(".");
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return path; // Return the path if translation not found
    }
  }
  
  return typeof result === "string" ? result : path;
}

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Get saved language or default to English
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isClient, setIsClient] = useState(false);
  
  // Set isClient to true once component mounts
  useEffect(() => {
    setIsClient(true);
    
    // Try to get language from localStorage
    const savedLocale = localStorage.getItem("language") as Locale;
    if (savedLocale && (savedLocale === "en" || savedLocale === "sv")) {
      setLocaleState(savedLocale);
    } else {
      // Default to English instead of detecting browser language
      setLocaleState("en");
    }
  }, []);
  
  // Save language preference
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (isClient) {
      localStorage.setItem("language", newLocale);
    }
  };
  
  // Translation function
  const t = (key: string): string => {
    if (!locale) return key;
    const localeTranslations = translations[locale];
    return getTranslation(localeTranslations, key);
  };
  
  const value = {
    locale,
    setLocale,
    t,
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 