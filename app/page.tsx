import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SocialProof } from "@/components/sections/social-proof";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <SocialProof />
      <FAQ />
      <CTA />
    </main>
  );
}
