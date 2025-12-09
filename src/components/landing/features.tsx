import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookCheck, BrainCircuit, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <BookCheck className="w-10 h-10 text-primary" />,
    title: 'Ringkasan Terstruktur',
    description: 'Dapatkan ringkasan yang jelas dan terorganisir, mencakup metode, hasil, dan kesimpulan penelitian.',
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-primary" />,
    title: 'Penjelasan Jargon',
    description: 'Istilah teknis dan jargon dalam jurnal dijelaskan secara sederhana agar mudah dipahami.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Dibuat untuk Indonesia',
    description: 'Output dalam Bahasa Indonesia formal yang baik dan benar, sesuai dengan kaidah akademik.',
  },
];

export default function Features() {
  return (
    <section id="features" className="container py-20 md:py-24 bg-secondary/50 rounded-t-2xl">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Fitur Unggulan</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kami menyediakan alat bantu terbaik untuk mempercepat proses studi dan penelitian Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
