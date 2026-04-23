import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/sections/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus | Mission Control for AI Agent Fleets",
  description: "Advanced orchestration layer for autonomous AI agent fleets. Scale from prototype to production with absolute precision and zero rogue behavior.",
  keywords: ["AI", "Agents", "Orchestration", "Fleet Management", "LLM", "Nexus"],
  openGraph: {
    title: "Nexus | Command Your AI Workforce",
    description: "One platform to orchestrate, monitor, and safeguard your entire fleet of AI agents.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus | Mission Control",
    description: "Command your AI workforce with absolute precision.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-white`}
      >
        <div className="relative min-h-screen flex flex-col">
          {/* Ambient glow — visible but not distracting */}
          <div className="pointer-events-none fixed top-0 left-1/3 w-[900px] h-[900px] bg-cyan-500/[0.07] rounded-full blur-[180px]" />
          <div className="pointer-events-none fixed bottom-0 right-1/4 w-[900px] h-[900px] bg-blue-500/[0.06] rounded-full blur-[180px]" />

          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
