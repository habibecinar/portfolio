"use client";

import { projects } from "@/lib/content";
import { useLang } from "./LanguageProvider";
import { SectionTitle } from "./About";
import { ArrowIcon, GithubIcon, LockIcon } from "./Icons";

export default function Projects() {
  const { t } = useLang();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle>{t.projects.title}</SectionTitle>
        <p className="mt-4 text-muted">{t.projects.subtitle}</p>

        {/* Öne çıkan proje */}
        <article className="group mt-12 grid overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-2">
          <Cover project={featured} large />
          <div className="flex flex-col justify-center p-7 md:p-10">
            <span className="w-fit rounded-full bg-peach-soft px-3 py-1 text-xs font-medium text-accent-dark">
              {t.projects.featured} · {featured.year}
            </span>
            <h3 className="mt-4 text-2xl font-bold sm:text-3xl">{featured.name}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t.projects.items[featured.id]}</p>
            <Tags tech={featured.tech} />
            <Links project={featured} t={t} />
          </div>
        </article>

        {/* Diğer projeler */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((p) => (
            <article key={p.id} className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white">
              <Cover project={p} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span className="text-xs text-muted">{p.year}</span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.projects.items[p.id]}</p>
                <Tags tech={p.tech} />
                <Links project={p} t={t} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cover({ project, large }) {
  const [bg, fg] = project.palette;
  if (project.image) {
    return (
      <div className={`overflow-hidden ${large ? "min-h-64" : "h-48"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${large ? "min-h-64 md:min-h-80" : "h-44"}`}
      style={{ background: bg }}
    >
      <div
        className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full opacity-20 transition duration-500 group-hover:scale-125"
        style={{ background: fg }}
      />
      <div className="absolute top-5 left-5 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full opacity-40" style={{ background: fg }} />
        ))}
      </div>
      <span
        className={`relative font-bold tracking-tight transition duration-500 group-hover:-translate-y-1 ${
          large ? "text-5xl sm:text-6xl" : "text-3xl"
        }`}
        style={{ color: fg }}
      >
        {project.name}
      </span>
    </div>
  );
}

function Tags({ tech }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-1.5">
      {tech.map((x) => (
        <li key={x} className="rounded-md bg-cream px-2 py-1 text-xs text-muted">
          {x}
        </li>
      ))}
    </ul>
  );
}

function Links({ project, t }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-cream transition hover:bg-accent"
        >
          {t.projects.live} <ArrowIcon />
        </a>
      )}
      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 transition hover:border-accent hover:text-accent"
        >
          <span className="scale-75"><GithubIcon /></span> {t.projects.code}
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-2 py-2 text-xs text-muted">
          <LockIcon /> {t.projects.private}
        </span>
      )}
    </div>
  );
}
