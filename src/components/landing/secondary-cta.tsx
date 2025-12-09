import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SecondaryCta() {
  return (
    <section id="secondary-cta" className="py-20 md:py-24 bg-primary/5">
      <div className="container text-center space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Jangan Biarkan Tugas Review Jurnal Menghambat Kelulusan Anda.
        </h2>
        <p className="text-muted-foreground text-lg">
          Ambil kendali atas waktu Anda. Manfaatkan kekuatan AI untuk fokus pada apa yang benar-benar penting: menganalisis, menulis, dan lulus tepat waktu.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-12"
        >
          <Link href="/app">Mulai Ringkas Jurnal Anda Sekarang – Gratis Tanpa Login</Link>
        </Button>
      </div>
    </section>
  );
}
