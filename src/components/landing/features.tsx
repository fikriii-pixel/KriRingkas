import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Fingerprint, Rocket, Smartphone } from 'lucide-react';

const featuresData = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: 'Kecepatan Ekstrem (Gemini Flash)',
    description: 'Ringkas jurnal 10.000 kata dalam hitungan detik, bukan jam. Hemat waktu Anda untuk hal yang lebih penting.',
  },
  {
    icon: <Fingerprint className="w-8 h-8 text-primary" />,
    title: 'Aman & Privasi Terjamin',
    description: 'Teks yang Anda masukkan dijamin tidak disimpan atau digunakan untuk pelatihan AI. Data Anda aman bersama kami.',
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: 'Mode Ringkasan Cerdas',
    description: 'Pilih format ringkasan cepat atau akademik terstruktur sesuai dengan kebutuhan tugas Anda.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: 'UI Minimalis & Responsif',
    description: 'Antarmuka yang bersih dan intuitif, mudah digunakan di laptop maupun smartphone Anda.',
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-20 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Fitur Unggulan yang Mendukung Kecepatan Akademik Anda
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Setiap fitur dirancang untuk menghilangkan hambatan dalam memahami literatur ilmiah, memungkinkan Anda fokus pada analisis dan penulisan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <Card key={index} className="text-center shadow-sm hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
