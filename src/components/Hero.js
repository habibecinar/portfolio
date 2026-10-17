"use client";

import { profile } from "@/lib/content";
import { useLang } from "./LanguageProvider";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* dekoratif şeftali şekiller */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-peach/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-peach-soft blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <span className="rise inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {t.hero.available}
        </span>

        <p className="rise mt-8 text-lg text-muted" style={{ animationDelay: "80ms" }}>
          {t.hero.hello}
        </p>
        <h1
          className="rise text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          style={{ animationDelay: "140ms" }}
        >
          {profile.name}
        </h1>
        <p
          className="rise mt-3 text-xl font-light tracking-[0.25em] text-accent uppercase sm:text-2xl"
          style={{ animationDelay: "200ms" }}
        >
          {t.hero.role}
        </p>

        <p className="rise mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg" style={{ animationDelay: "260ms" }}>
          {t.hero.intro}
        </p>

        <div className="rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition hover:bg-accent"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
          >
            {t.hero.ctaContact}
          </a>
          <div className="ml-1 flex items-center gap-1">
            <IconLink href={profile.github} label="GitHub"><GithubIcon /></IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn"><LinkedinIcon /></IconLink>
            <IconLink href={`mailto:${profile.email}`} label="E-mail"><MailIcon /></IconLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition hover:bg-peach-soft hover:text-accent"
    >
      {children}
    </a>
  );
}
