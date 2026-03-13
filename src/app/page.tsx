import { Github, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { VisitCounter } from "@/components/visit-counter";
import { socialLinks } from "@/lib/portfolio-data";

const skills = [
  { title: "Languages", value: "TypeScript Lua Python JavaScript" },
  { title: "Databases", value: "PostgreSQL Redis MongoDB" },
  { title: "Tools", value: "Figma VSCode Railway Git" },
  { title: "Other", value: "HTML CSS EJS SCSS REST" },
  { title: "Frameworks", value: "React Next.js Tailwind" },
];

export default function HomePage() {
  return (
    <div className="relative overflow-x-clip pb-10">
      <aside className="pointer-events-none fixed left-6 top-0 z-20 hidden h-screen flex-col items-center lg:flex">
        <div className="h-[190px] w-px bg-[#abb2bf]" />
        <div className="pointer-events-auto mt-4 flex flex-col gap-3 text-[#abb2bf]">
          <Link href={socialLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <Github size={20} />
          </Link>
          <Link href={socialLinks.telegram} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <Send size={20} />
          </Link>
        </div>
      </aside>

      <main className="mx-auto max-w-[1040px] px-5 pt-8 md:px-8 md:pt-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <span className="relative block h-4 w-4">
              <span className="absolute left-0 top-0 h-2 w-2 border border-white" />
              <span className="absolute right-0 top-0 h-2 w-2 bg-white" />
              <span className="absolute left-0 bottom-0 h-2 w-2 bg-white" />
              <span className="absolute right-0 bottom-0 h-2 w-2 border border-white" />
            </span>
            <span className="text-xl font-semibold">Denis (rollsev)</span>
          </div>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#home" className="text-[#abb2bf] transition hover:text-white">
              <span className="accent">#</span>home
            </a>
            <a href="#works" className="text-[#abb2bf] transition hover:text-white">
              <span className="accent">#</span>works
            </a>
            <a href="#about-me" className="text-[#abb2bf] transition hover:text-white">
              <span className="accent">#</span>about-me
            </a>
            <a href="#contacts" className="text-[#abb2bf] transition hover:text-white">
              <span className="accent">#</span>contacts
            </a>
          </nav>
        </header>

        <section id="home" className="mt-14 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <h1 className="max-w-[620px] text-[2.3rem] font-semibold leading-[1.28] text-white md:text-[2.95rem]">
              Denis (rollsev) is a <span className="accent">backend engineer</span> and{" "}
              <span className="accent">automation developer</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-xl text-[#abb2bf]">
              He builds Telegram bots, web apps, and AI automations for real-world tasks
            </p>
            <Link
              href={socialLinks.telegram}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex border border-[#c778dd] px-6 py-3 text-lg text-white transition hover:bg-[#c778dd]/10"
            >
              Contact me!!
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="outline-cube absolute left-2 top-20 h-[5.5rem] w-[5.5rem] md:h-24 md:w-24" />
            <div className="outline-cube absolute left-14 top-32 h-[5.5rem] w-[5.5rem] md:h-24 md:w-24" />
            <div className="dot-grid absolute right-2 top-[200px] h-20 w-20 md:top-[180px] md:h-24 md:w-24" />
            <Image
              src="/template/hero-person.png"
              alt="Portrait"
              width={447}
              height={559}
              priority
              className="relative z-10 ml-auto w-[360px] md:w-[420px]"
            />
            <div className="absolute bottom-5 left-5 z-20 flex w-[320px] items-center gap-3 border border-[#abb2bf] bg-[#282c33] px-3 py-2 text-base text-[#abb2bf] md:w-[355px]">
              <span className="h-4 w-4 bg-[#c778dd]" />
              <span>Currently working on Portfolio</span>
              <span className="ml-auto text-white">
                <VisitCounter mode="inline" />
              </span>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-[#abb2bf] pt-10">
          <div className="mx-auto max-w-[780px] border border-[#abb2bf] px-6 py-7">
            <p className="text-center text-xl text-white md:text-2xl">With great power comes great electricity bill</p>
            <p className="mt-4 text-right text-lg text-[#abb2bf]">- Dr. Who</p>
          </div>
        </section>

        <section id="works" className="mt-16">
          <div className="flex items-center gap-4">
            <h2 className="section-title whitespace-nowrap">
              <span className="accent">#</span>projects
            </h2>
            <div className="h-px flex-1 bg-[#c778dd]" />
            <span className="text-sm text-[#abb2bf]">View all ~~&gt;</span>
          </div>

          <div className="mt-10 border border-[#abb2bf] bg-[#2c313a] px-7 py-10 text-center">
            <p className="text-xl text-white">Projects are temporarily hidden.</p>
            <p className="mt-3 text-base text-[#abb2bf]">We will add stronger case studies together in the next iteration.</p>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-center gap-4">
            <h2 className="section-title whitespace-nowrap">
              <span className="accent">#</span>skills
            </h2>
            <div className="h-px flex-1 bg-[#c778dd]" />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative hidden min-h-[250px] lg:block">
              <div className="dot-grid absolute left-14 top-5 h-[4.5rem] w-[4.5rem]" />
              <div className="outline-cube absolute left-0 top-[6.5rem] h-20 w-20" />
              <div className="dot-grid absolute left-[7.5rem] top-[8.5rem] h-14 w-14" />
              <div className="outline-cube absolute left-[11.5rem] top-14 h-16 w-16 border-[#abb2bf]" />
              <div className="outline-cube absolute left-40 top-44 h-20 w-20" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((item) => (
                <article key={item.title} className="border border-[#abb2bf] bg-[#2c313a] px-4 py-3">
                  <p className="text-sm text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#abb2bf]">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about-me" className="mt-[4.5rem]">
          <div className="flex items-center gap-4">
            <h2 className="section-title whitespace-nowrap">
              <span className="accent">#</span>about-me
            </h2>
            <div className="h-px flex-1 bg-[#c778dd]" />
          </div>

          <div className="mt-8 grid items-end gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-lg leading-8 text-[#abb2bf]">
                Hello, I&apos;m Denis (rollsev)!
                <br />
                I&apos;m a backend engineer based in Moscow, focused on Telegram bots, web applications, and AI-powered
                automations.
                <br />
                <br />I transform raw ideas into reliable production systems that solve real user workflows.
              </p>
              <Link
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex border border-[#c778dd] px-5 py-2 text-base text-white transition hover:bg-[#c778dd]/10"
              >
                Read more --&gt;
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-[320px] border-b border-[#abb2bf]">
              <Image src="/template/about-person.png" alt="About portrait" width={204} height={306} className="mx-auto w-[220px]" />
              <div className="dot-grid absolute -right-10 top-8 h-16 w-16" />
            </div>
          </div>
        </section>

        <section id="contacts" className="mt-16">
          <div className="flex items-center gap-4">
            <h2 className="section-title whitespace-nowrap">
              <span className="accent">#</span>contacts
            </h2>
            <div className="h-px flex-1 bg-[#c778dd]" />
          </div>

          <div className="mt-9 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <p className="max-w-[520px] text-lg leading-8 text-[#abb2bf]">
              I&apos;m interested in freelance opportunities. However, if you have another request or question,
              don&apos;t hesitate to contact me.
            </p>

            <div className="space-y-4">
              <article className="border border-[#abb2bf] bg-[#2c313a] p-4">
                <p className="text-white">Message me here</p>
                <Link href={socialLinks.telegram} target="_blank" rel="noreferrer" className="mt-2 block text-[#abb2bf] hover:text-white">
                  @rollsev
                </Link>
              </article>
              <article className="border border-[#abb2bf] bg-[#2c313a] p-4">
                <p className="text-white">Find my code</p>
                <Link href={socialLinks.github} target="_blank" rel="noreferrer" className="mt-2 block text-[#abb2bf] hover:text-white">
                  github.com/rollce
                </Link>
              </article>
            </div>
          </div>
        </section>

        <footer className="mt-[4.5rem] border-t border-[#abb2bf] py-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-3 text-white">
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-0 h-2 w-2 border border-white" />
                  <span className="absolute right-0 top-0 h-2 w-2 bg-white" />
                  <span className="absolute left-0 bottom-0 h-2 w-2 bg-white" />
                  <span className="absolute right-0 bottom-0 h-2 w-2 border border-white" />
                </span>
                <span className="font-semibold">Denis (rollsev)</span>
              </div>
              <p className="mt-2 text-sm text-[#abb2bf]">Backend engineer, Telegram bot and AI automation developer</p>
            </div>

            <div className="text-sm">
              <p className="text-white">Media</p>
              <div className="mt-2 flex gap-4 text-[#abb2bf]">
                <Link href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white">
                  <Github size={18} />
                </Link>
                <Link href={socialLinks.telegram} target="_blank" rel="noreferrer" className="hover:text-white">
                  <Send size={18} />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
