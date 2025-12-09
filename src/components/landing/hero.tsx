import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
          Ringkas Jurnal Ilmiah{' '}
          <span className="text-primary">dalam Sekejap</span> dengan AI
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          KriRingkas.ID membantu mahasiswa Indonesia memahami inti penelitian dengan ringkasan terstruktur dan penjelasan jargon secara instan.
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/app">Mulai Meringkas</Link>
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={800}
            height={600}
            className="rounded-xl shadow-lg"
            data-ai-hint={heroImage.imageHint}
          />
        )}
      </div>
    </section>
  );
}
