import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { SocialProof } from "@/components/sections/social-proof";
import { TrustSignals } from "@/components/sections/trust-signals";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SocialProof />
      <TrustSignals />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
