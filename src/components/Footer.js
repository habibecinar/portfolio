"use client";

import { profile } from "@/lib/content";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 text-xs text-muted sm:flex-row">
        <p>© 2026 {profile.name}</p>
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}
