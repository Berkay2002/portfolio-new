"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useSyncExternalStore,
} from "react";
import type { Locale } from "@/types";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
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

  const value = {
    locale,
    setLocale,
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
