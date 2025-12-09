import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookCheck, BrainCircuit, FileSignature } from 'lucide-react';

const valueProps = [
  {
    icon: <BookCheck className="w-10 h-10 text-accent" />,
    title: 'Ringkasan Terstruktur 5 Poin',
    description: 'Fokus langsung pada Abstrak, Metode, Hasil, dan Kesimpulan. Dapatkan inti penelitian tanpa basa-basi.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-accent" />,
    title: 'Deteksi & Penjelasan Jargon',
    description: 'Memahami istilah-istilah rumit secara instan tanpa perlu membuka Google atau kamus lain.',
  },
  {
    icon: <FileSignature className="w-10 h-10 text-accent" />,
    title: 'Output Akademik yang Rapi',
    description: 'Hasil ringkasan disajikan dalam format formal dan terstruktur, siap dipakai untuk review literatur Anda.',
  },
];

export default function Solution() {
  return (
    <section id="solution" className="container py-20 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          KriRingkas.ID: Solusi AI yang Merubah Jurnal Menjadi Intisari Cepat
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          KriRingkas.ID memanfaatkan Gemini AI untuk memproses teks ilmiah, secara instan menyajikan data yang siap Anda masukkan ke dalam tugas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valueProps.map((prop, index) => (
          <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow border-accent/20 hover:border-accent">
            <CardHeader>
              <div className="flex justify-center mb-4">{prop.icon}</div>
              <CardTitle>{prop.title}</CardTitle>
              <CardDescription>{prop.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
