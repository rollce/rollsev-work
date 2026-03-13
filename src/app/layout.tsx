import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import "./globals.css";

const mono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rollsev.work"),
  title: {
    default: "Denis (rollsev) | Portfolio",
    template: "%s | rollsev.work",
  },
  description: "Backend engineer creating Telegram bots, web apps, and AI automations.",
  openGraph: {
    title: "Denis (rollsev) | Portfolio",
    description: "Backend engineer creating Telegram bots, web apps, and AI automations.",
    url: "https://rollsev.work",
    siteName: "rollsev.work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denis (rollsev) | Portfolio",
    description: "Backend engineer creating Telegram bots, web apps, and AI automations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mono.variable} antialiased`}>{children}</body>
    </html>
  );
}
