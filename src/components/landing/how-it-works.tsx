import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const steps = [
  {
    id: "how-it-works-1",
    step: 1,
    title: 'Tempelkan Teks',
    description: 'Salin dan tempelkan seluruh teks jurnal ilmiah, artikel, atau laporan ke dalam kotak input yang disediakan.',
  },
  {
    id: "how-it-works-2",
    step: 2,
    title: 'Pilih Jenis Ringkasan',
    description: 'Tentukan mode ringkasan yang Anda butuhkan, apakah ringkasan cepat atau akademik terstruktur.',
  },
  {
    id: "how-it-works-3",
    step: 3,
    title: 'Dapatkan Output Instan',
    description: 'AI akan menyajikan ringkasan formal dan poin-poin penting, lengkap dengan penjelasan jargon.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-20 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Hanya 3 Langkah Cepat untuk Mendapatkan Intisari Jurnal
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Prosesnya dirancang agar intuitif dan efisien, mengubah teks panjang menjadi pengetahuan siap pakai dalam sekejap.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => {
          const image = PlaceHolderImages.find((img) => img.id === step.id);
          return (
            <Card key={step.step} className="text-center shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                {image && (
                  <div className="relative aspect-[4/3] w-full mb-4">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="rounded-t-lg object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
