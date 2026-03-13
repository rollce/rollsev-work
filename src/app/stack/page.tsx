import { ArrowRight, Github, Send } from "lucide-react";
import Link from "next/link";

import { GlowBackground } from "@/components/glow-background";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { coreSkills, socialLinks, stackGroups } from "@/lib/portfolio-data";

export const metadata = {
  title: "Stack | rollsev.work",
  description: "Skills, stack, and engineering approach.",
};

export default function StackPage() {
  return (
    <div className="relative overflow-x-hidden">
      <GlowBackground />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Engineering"
          title="Stack & Workflow"
          description="Tools and methods I use to deliver production-ready web products."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
          <article className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-zinc-100">How I work</h3>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-300 md:grid-cols-2">
              {coreSkills.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              href={socialLinks.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-3 text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Telegram <Send size={16} />
            </Link>
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
            >
              GitHub <Github size={16} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
            >
              Explore Projects <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
