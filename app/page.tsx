import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SocialProof } from "@/components/sections/social-proof";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <SocialProof />
    </main>
  );
}
