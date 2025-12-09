import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
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
  {
    id: "testimonial-3",
    name: 'Cahya D.',
    role: 'Mahasiswa S1 UGM',
    text: 'Fitur penjelasan jargonnya luar biasa. Sangat membantu untuk paper-paper yang padat istilah teknis.',
  },
  {
    id: "testimonial-4",
    name: 'Dewi S.',
    role: 'Mahasiswa S3 ITB',
    text: 'Untuk disertasi, saya harus membaca puluhan jurnal setiap minggu. Alat ini penyelamat hidup. Akurasinya top.',
  },
  {
    id: "testimonial-5",
    name: 'Eko W.',
    role: 'Mahasiswa S1 ITS',
    text: 'UI-nya bersih banget dan gampang dipakai. Langsung copy-paste, klik, selesai. Nggak ribet.',
  },
  {
    id: "testimonial-6",
    name: 'Fitri A.',
    role: 'Mahasiswa S2 Undip',
    text: 'Awalnya ragu, tapi setelah coba gratis ternyata hasilnya bagus. Langsung mempertimbangkan langganan Pro untuk skripsi.',
  },
  {
    id: "testimonial-7",
    name: 'Gilang P.',
    role: 'Mahasiswa S1 Brawijaya',
    text: 'Sangat membantu mengejar deadline tugas review. Bisa fokus ke analisis daripada cuma merangkum manual.',
  },
  {
    id: "testimonial-8",
    name: 'Hana K.',
    role: 'Mahasiswa Pascasarjana UMY',
    text: 'Poin-poin penting yang diekstrak AI sangat akurat. Memudahkan saya saat presentasi dan diskusi di kelas.',
  },
  {
    id: "testimonial-9",
    name: 'Indra J.',
    role: 'Mahasiswa S1 Unair',
    text: 'Luar biasa cepat! Jurnal bahasa Inggris langsung diringkas ke bahasa Indonesia yang mudah dimengerti.',
  },
  {
    id: "testimonial-10",
    name: 'Joko S.',
    role: 'Dosen Muda',
    text: 'Saya merekomendasikan ini ke mahasiswa bimbingan saya. Membantu mereka memahami dasar penelitian dengan lebih cepat.',
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const image = PlaceHolderImages.find((img) => img.id === testimonial.id);
              return (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <Card className="shadow-lg h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <blockquote className="text-lg italic text-foreground mb-6 flex-grow">
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
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
