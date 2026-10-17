"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { dict } from "@/lib/content";

const LanguageContext = createContext({ lang: "tr", t: dict.tr, setLang: () => {} });

// Küçük bir dil "store"u: seçim localStorage'da tutulur, yoksa tarayıcı diline bakılır.
const listeners = new Set();

function readLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "tr" || saved === "en") return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("tr") ? "tr" : "en";
}

function subscribe(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function setLang(l) {
  try {
    localStorage.setItem("lang", l);
  } catch {}
  memo = l;
  listeners.forEach((cb) => cb());
}

let memo = null;
const getSnapshot = () => (memo ??= readLang());
const getServerSnapshot = () => "tr";

export function LanguageProvider({ children }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
