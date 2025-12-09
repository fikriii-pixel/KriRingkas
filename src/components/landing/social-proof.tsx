import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: "testimonial-1",
    name: 'Anisa P.',
    role: 'Mahasiswa S2 UNPAD',
    text: 'Berkat KriRingkas.ID, saya bisa memahami jurnal metodologi yang rumit dalam 2 menit. Tugas review literatur Tesis saya selesai lebih cepat 80%.',
  },
  {
    id: "testimonial-2",
    name: 'Bima H.',
    role: 'Mahasiswa S1 UI',
    text: 'Ringkasannya fokus ke hasil dan metode. Nggak buang-buang waktu baca pendahuluan yang panjang. Wajib coba!',
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-20 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Bukti Nyata dari Ribuan Mahasiswa</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lihat bagaimana KriRingkas.ID telah mengubah cara mahasiswa mengerjakan tugas akademis mereka.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => {
             const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
             return (
              <Card key={testimonial.name} className="shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-block bg-primary text-primary-foreground rounded-lg px-6 py-3">
            <p className="text-2xl font-bold">
              Telah membantu menyelesaikan total 30.000+ Tugas & Review Jurnal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
