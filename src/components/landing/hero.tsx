import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
          Perangkum Jurnal AI Tercepat untuk{' '}
          <span className="text-primary">Mahasiswa Indonesia</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
          Ringkas jurnal tebal, tesis, dan literatur akademik dalam hitungan detik dengan presisi tinggi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button size="lg" asChild className="text-lg h-12">
            <Link href="/app">Coba Gratis Sekarang</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground pt-2">
          Didukung oleh Teknologi Gemini AI | Digunakan oleh 10.000+ Mahasiswa.
        </p>
      </div>
      <div className="hidden lg:flex justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={800}
            height={600}
            className="rounded-xl shadow-2xl ring-1 ring-border/50"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
      </div>
    </section>
  );
}
