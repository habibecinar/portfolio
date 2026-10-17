"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import { useLang } from "./LanguageProvider";
import { SectionTitle } from "./About";

// Formspree (ücretsiz) form ID'si. README'de nasıl alınacağı anlatılıyor.
// Tanımlı değilse form, kullanıcının e-posta uygulamasını açar.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!FORMSPREE_ID) {
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio — " + data.name)}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-peach";

  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <SectionTitle>{t.contact.title}</SectionTitle>
          <p className="mt-6 max-w-md leading-relaxed text-muted">{t.contact.subtitle}</p>
          <p className="mt-8 text-sm text-muted">{t.contact.or}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-1 inline-block text-lg font-medium break-all text-accent underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
          <p className="mt-6 text-sm text-muted">{profile.location}</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-white/60 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">{t.contact.name}</span>
              <input name="name" required placeholder={t.contact.name} className={input} />
            </label>
            <label className="block">
              <span className="sr-only">{t.contact.email}</span>
              <input name="email" type="email" required placeholder={t.contact.email} className={input} />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">{t.contact.message}</span>
            <textarea name="message" required rows={6} placeholder={t.contact.message} className={`${input} resize-none`} />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:bg-accent disabled:opacity-60 sm:w-auto"
          >
            {status === "sending" ? t.contact.sending : t.contact.send}
          </button>
          <p aria-live="polite" className="min-h-5 text-sm">
            {status === "success" && <span className="text-emerald-700">{t.contact.success}</span>}
            {status === "error" && <span className="text-red-700">{t.contact.error}</span>}
          </p>
        </form>
      </div>
    </section>
  );
}
