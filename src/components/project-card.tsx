import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_60px_-32px_rgba(56,189,248,0.7)]">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">{project.short}</p>
      <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl text-zinc-100">{project.name}</h3>
      <p className="mt-3 text-sm text-zinc-400">{project.problem}</p>
      <p className="mt-3 text-sm text-zinc-300">{project.value}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          href={project.domain}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100 transition hover:bg-cyan-400/20"
        >
          Live <ExternalLink size={14} />
        </Link>
        <Link
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-4 py-2 text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
        >
          Repo <Github size={14} />
        </Link>
      </div>
    </article>
  );
}
