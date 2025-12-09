import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonialsData = [
  {
    id: 'testimonial-1',
    name: 'Budi Hartono',
    role: 'Mahasiswa S2 Teknik Informatika',
    text: 'KriRingkas.ID benar-benar mengubah cara saya mereview literatur. Hemat waktu dan sangat akurat. Fitur penjelasan jargonnya juara!',
  },
  {
    id: 'testimonial-2',
    name: 'Siti Aminah',
    role: 'Mahasiswi S1 Kedokteran',
    text: 'Awalnya ragu, tapi setelah coba, ringkasannya sangat membantu memahami jurnal-jurnal kompleks. Wajib coba untuk anak kedokteran!',
  },
  {
    id: 'testimonial-3',
    name: 'Agus Wijaya',
    role: 'Peneliti & Dosen Muda',
    text: 'Sebagai dosen, saya merekomendasikan ini ke mahasiswa bimbingan saya. Alat yang bagus untuk pemahaman awal sebelum diskusi mendalam.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="container py-20 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Apa Kata Mereka?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ribuan mahasiswa telah merasakan manfaat dari KriRingkas.ID.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => {
          const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
          return (
            <Card key={testimonial.id} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <blockquote className="italic text-muted-foreground">"{testimonial.text}"</blockquote>
              </CardContent>
              <div className="bg-secondary/50 p-4 flex items-center gap-4 rounded-b-lg">
                <Avatar>
                  {image && (
                    <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                  )}
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
