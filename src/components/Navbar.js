"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["#about", t.nav.about],
    ["#projects", t.nav.projects],
    ["#contact", t.nav.contact],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-cream/85 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-lg font-bold tracking-tight">
          HÇ<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-muted transition hover:text-ink">
              {label}
            </a>
          ))}
          <LangSwitch lang={lang} setLang={setLang} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LangSwitch lang={lang} setLang={setLang} />
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line"
          >
            <span className={`h-0.5 w-4 bg-ink transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-4 bg-ink transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-line bg-cream px-5 pb-5 md:hidden">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-t border-line py-3 text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }) {
  return (
    <div className="flex rounded-full border border-line p-0.5 text-xs font-medium">
      {["tr", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition ${
            lang === l ? "bg-ink text-cream" : "text-muted hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
