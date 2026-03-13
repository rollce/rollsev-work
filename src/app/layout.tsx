import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { socialLinks } from "@/lib/portfolio-data";

import "./globals.css";

const heading = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rollsev.work"),
  title: {
    default: "rollsev.work | Denis Mitrofanov",
    template: "%s | rollsev.work",
  },
  description:
    "Dark-style portfolio of Denis Mitrofanov: 8 live product projects, skills, and production engineering work.",
  openGraph: {
    title: "rollsev.work | Denis Mitrofanov",
    description:
      "Problem-driven product engineer building practical fullstack web systems.",
    url: "https://rollsev.work",
    siteName: "rollsev.work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rollsev.work | Denis Mitrofanov",
    description:
      "Problem-driven product engineer building practical fullstack web systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <SiteHeader />
        {children}
        <footer className="border-t border-zinc-800/80 bg-zinc-950/85">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Denis Mitrofanov. Built for rollsev.work.</p>
            <div className="flex items-center gap-4">
              <Link href={socialLinks.telegram} target="_blank" rel="noreferrer" className="hover:text-zinc-100">
                Telegram
              </Link>
              <Link href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-zinc-100">
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
