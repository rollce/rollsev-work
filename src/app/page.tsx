import { ArrowRight, Github, Rocket, Send, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";

import { GlowBackground } from "@/components/glow-background";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VisitCounter } from "@/components/visit-counter";
import { coreSkills, openSourceProjects, projects, socialLinks, stackGroups } from "@/lib/portfolio-data";

const highlights = [
  {
    title: "Problem-Driven Builder",
    text: "I do not ship generic demos. Every project starts from a real user pain point and measurable value.",
    icon: Rocket,
  },
  {
    title: "Fast Product Delivery",
    text: "From concept to production in short cycles with clean UX and practical architecture.",
    icon: Sparkles,
  },
  {
    title: "Production Mindset",
    text: "Live deployment, domain setup, CI workflows, and clear handoff-ready codebases.",
    icon: Wrench,
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <GlowBackground />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 md:gap-28 md:py-24">
        <section className="grid items-center gap-10 md:grid-cols-[1.25fr_0.95fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles size={14} /> Digital Product Engineer
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-heading)] text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-50 sm:text-6xl md:text-7xl">
              Denis Mitrofanov
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                rollsev.work
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
              I build fullstack web products that solve practical problems for students, communities, and teams.
              This portfolio combines 8 deployed services into one ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={socialLinks.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/25"
              >
                Telegram <Send size={16} />
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-zinc-500"
              >
                GitHub <Github size={16} />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
              >
                Explore Projects <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="space-y-4">
            <VisitCounter />
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Live domains</p>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-3xl text-zinc-50">8</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Core stack</p>
              <p className="mt-2 text-sm text-zinc-300">Next.js · TypeScript · Tailwind · Framer Motion · Railway</p>
            </div>
          </Reveal>
        </section>

        <section>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I can do"
            description="I combine product thinking, engineering speed, and clean execution for launch-ready web systems."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                  <item.icon size={20} className="text-cyan-300" />
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl text-zinc-100">{item.title}</h3>
                  <p className="mt-3 text-sm text-zinc-400">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Product Engineering Toolkit"
            description="A practical stack I use to build polished, production-ready products."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stackGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-zinc-100">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-zinc-100">Work style</h3>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
                {coreSkills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section>
          <SectionHeading
            eyebrow="Portfolio"
            title="8 Product Cases"
            description="Each product solves a specific problem and runs on a live subdomain."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.04}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.22}>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
              >
                Open the full projects page <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </section>

        <section>
          <SectionHeading
            eyebrow="Open Source"
            title="Beyond Portfolio"
            description="Additional projects where I focus on automation, bots, and tooling."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {openSourceProjects.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08}>
                <article className="h-full rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-zinc-100">{item.name}</h3>
                  <p className="mt-3 text-sm text-zinc-400">{item.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">{item.stack}</p>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm text-cyan-200 transition hover:text-cyan-100"
                  >
                    View repository <ArrowRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-400/30 bg-gradient-to-r from-cyan-950/50 via-zinc-900 to-zinc-950 p-8 text-center md:p-12">
          <Reveal>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl text-zinc-50 md:text-5xl">Let&apos;s build something useful.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-300 md:text-lg">
              I design and ship web products that are practical, scalable, and visually sharp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={socialLinks.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/25"
              >
                Message me on Telegram <Send size={16} />
              </Link>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
              >
                View GitHub profile <Github size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
