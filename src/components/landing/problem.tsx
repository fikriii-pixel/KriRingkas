import { Card, CardContent } from '@/components/ui/card';
import { Clock, Brain, FileText } from 'lucide-react';

const problems = [
  {
    icon: <Clock className="w-10 h-10 text-destructive" />,
    text: 'Merangkum satu jurnal tebal bisa memakan waktu 3-5 jam.',
  },
  {
    icon: <Brain className="w-10 h-10 text-destructive" />,
    text: 'Bahasa akademik dan istilah metodologi sering kali terlalu rumit untuk dipahami cepat.',
  },
  {
    icon: <FileText className="w-10 h-10 text-destructive" />,
    text: 'Kesulitan menemukan intisari dan poin kunci dari ratusan halaman literatur.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-secondary/50 py-20 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Mengapa Membaca Jurnal Membuang Waktu Kuliah Anda?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Waktu Anda berharga. Jangan habiskan berjam-jam untuk tugas yang bisa diselesaikan AI dalam hitungan detik.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-background/70 shadow-md">
              <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                {problem.icon}
                <p className="font-medium text-lg leading-snug">{problem.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
