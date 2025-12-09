import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
