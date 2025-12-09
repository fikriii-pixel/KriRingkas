import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Users } from 'lucide-react';

const pricingData = [
  {
    title: 'Gratis',
    description: 'Untuk mencoba dan penggunaan ringan.',
    price: 'Rp 0',
    features: ['5 Ringkasan/Hari', 'Fitur Standar'],
    icon: <Check className="w-8 h-8 text-primary" />,
    cta: 'Mulai Gratis',
    bestValue: false,
  },
  {
    title: 'Pro Mahasiswa',
    description: 'Untuk mahasiswa yang butuh kecepatan penuh.',
    price: 'Segera Hadir',
    features: ['Ringkasan Tak Terbatas', 'Semua Mode Cerdas', 'Kuota Teks Lebih Besar', 'Prioritas Dukungan'],
    icon: <Star className="w-8 h-8 text-white" />,
    cta: 'Pilih Pro',
    bestValue: true,
  },
  {
    title: 'Edu Pack',
    description: 'Untuk kelompok belajar atau tim.',
    price: 'Segera Hadir',
    features: ['Semua Fitur Pro', '5 Akun Pengguna', 'Diskon Grup'],
    icon: <Users className="w-8 h-8 text-primary" />,
    cta: 'Hubungi Kami',
    bestValue: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="container py-20 md:py-24 bg-secondary/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Mulai Hemat Waktu Anda Sekarang</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Pilih paket yang paling sesuai dengan kebutuhan akademis Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingData.map((tier) => (
          <Card
            key={tier.title}
            className={`flex flex-col shadow-lg transition-all duration-300 ${tier.bestValue ? 'border-primary ring-2 ring-primary scale-105' : 'hover:shadow-2xl'}`}
          >
            {tier.bestValue && (
              <div className="bg-primary text-primary-foreground text-center py-1.5 px-4 text-sm font-semibold rounded-t-lg">
                Paling Populer
              </div>
            )}
            <CardHeader className="items-center text-center">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 ${tier.bestValue ? 'bg-primary' : 'bg-primary/10'}`}>
                {tier.icon}
              </div>
              <CardTitle>{tier.title}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-4xl font-bold text-center mb-6">{tier.price}</p>
              <ul className="space-y-4">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={tier.bestValue ? 'default' : 'outline'}>
                <Link href="/app">{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
