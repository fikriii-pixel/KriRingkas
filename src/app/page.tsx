import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/landing/hero';
import Problem from '@/components/landing/problem';
import Solution from '@/components/landing/solution';
import Features from '@/components/landing/features';
import SocialProof from '@/components/landing/social-proof';
import HowItWorks from '@/components/landing/how-it-works';
import Pricing from '@/components/landing/pricing';
import Faq from '@/components/landing/faq';
import SecondaryCta from '@/components/landing/secondary-cta';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <SocialProof />
        <HowItWorks />
        <Pricing />
        <Faq />
        <SecondaryCta />
      </main>
      <Footer />
    </div>
  );
}
