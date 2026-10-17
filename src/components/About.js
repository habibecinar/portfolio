"use client";

import { skills } from "@/lib/content";
import { useLang } from "./LanguageProvider";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionTitle>{t.about.title}</SectionTitle>
          <p className="mt-6 leading-relaxed text-muted">{t.about.p1}</p>
          <p className="mt-4 leading-relaxed text-muted">{t.about.p2}</p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {t.about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-white/60 p-4">
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="mt-1 text-xl font-bold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-medium tracking-[0.2em] text-accent uppercase">{t.about.skillsTitle}</h3>
          <div className="mt-6 space-y-6">
            {skills.map((g) => (
              <div key={g.group}>
                <p className="mb-3 text-sm font-medium">{t.about.groups[g.group]}</p>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm transition hover:border-accent hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      {children}
      <span className="mt-3 block h-1 w-10 rounded-full bg-accent" />
    </h2>
  );
}
