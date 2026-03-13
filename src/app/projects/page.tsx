import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { GlowBackground } from "@/components/glow-background";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/portfolio-data";

export const metadata = {
  title: "Projects | rollsev.work",
  description: "8 live projects by Denis Mitrofanov.",
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-x-hidden">
      <GlowBackground />
      <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Live Portfolio"
          title="Projects"
          description="Every product below is deployed and accessible through its own domain."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-3 text-sm text-zinc-200 transition hover:border-zinc-500 hover:text-zinc-50"
            >
              Back to home <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
