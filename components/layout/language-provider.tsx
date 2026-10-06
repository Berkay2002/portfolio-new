"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useSyncExternalStore,
} from "react";
import translations from "@/lib/translations";
import type { Locale } from "@/types";

// Helper function to get a nested translation value
export function getTranslation(
  obj: Record<string, unknown>,
  path: string
): string {
  const keys = path.split(".");
  let result: unknown = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      // TypeScript can't know the shape, so cast to Record<string, unknown>
      result = (result as Record<string, unknown>)[key];
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

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

// The saved language lives in localStorage. The server and the hydrating client both render English,
// then the client switches to the saved language, so a Swedish visitor gets no hydration mismatch.
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
// localStorage throws when site data is blocked; the page then stays in English.
const savedLocale = (): Locale => {
  try {
    return localStorage.getItem("language") === "sv" ? "sv" : "en";
  } catch {
    return "en";
  }
};
const serverLocale = (): Locale => "en";

export function LanguageProvider({ children }: LanguageProviderProps) {
  const locale = useSyncExternalStore(subscribe, savedLocale, serverLocale);

  const setLocale = (newLocale: Locale) => {
    try {
      localStorage.setItem("language", newLocale);
    } catch {
      return;
    }
    for (const listener of listeners) listener();
  };

  // Translation function
  const t = (key: string): string => {
    if (!locale) {
      return key;
    }
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
