"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Fingerprint, Rocket, Smartphone, Zap, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const featuresData = [
  {
    icon: Rocket,
    title: 'Kecepatan Ekstrem (Gemini Flash)',
    description: 'Ringkas jurnal 10.000 kata dalam hitungan detik, bukan jam. Hemat waktu Anda untuk hal yang lebih penting.',
    stats: '5x lebih cepat',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    delay: 0,
  },
  {
    icon: Shield,
    title: 'Aman & Privasi Terjamin',
    description: 'Teks yang Anda masukkan dijamin tidak disimpan atau digunakan untuk pelatihan AI. Data Anda aman bersama kami.',
    stats: '100% enkripsi',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    delay: 100,
  },
  {
    icon: Bot,
    title: 'Mode Ringkasan Cerdas',
    description: 'Pilih format ringkasan cepat atau akademik terstruktur sesuai dengan kebutuhan tugas Anda.',
    stats: '3 mode cerdas',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    delay: 200,
  },
  {
    icon: Smartphone,
    title: 'UI Minimalis & Responsif',
    description: 'Antarmuka yang bersih dan intuitif, mudah digunakan di laptop maupun smartphone Anda.',
    stats: '100% responsif',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-orange-50 to-amber-50',
    delay: 300,
  },
  {
    icon: Zap,
    title: 'Pemrosesan Real-time',
    description: 'Hasil langsung muncul saat Anda mengetik, tanpa perlu menekan tombol submit.',
    stats: 'Real-time',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
    delay: 400,
  },
  {
    icon: Sparkles,
    title: 'AI Terbaru Google',
    description: 'Ditenagai oleh Gemini 2.0 Flash, model AI terbaru dari Google yang dioptimalkan untuk teks akademik.',
    stats: 'Gemini 2.0',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
    delay: 500,
  },
  {
    icon: TrendingUp,
    title: 'Akurasi Tinggi',
    description: 'Mempertahankan makna asli dan konteks akademik dengan akurasi hingga 95%.',
    stats: '95% akurat',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-red-50 to-rose-50',
    delay: 600,
  },
  {
    icon: Fingerprint,
    title: 'Tanpa Login',
    description: 'Gunakan langsung tanpa registrasi. Cukup tempel teks dan dapatkan ringkasan.',
    stats: 'Tanpa login',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50',
    delay: 700,
  },
];

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 to-purple-50/20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                           linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Fitur Unggulan</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mendukung Kecepatan Akademik Anda
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Setiap fitur dirancang khusus untuk{' '}
            <span className="font-semibold text-blue-600">menghilangkan hambatan</span> dalam memahami literatur ilmiah, 
            memungkinkan Anda fokus pada analisis dan penulisan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card ${isVisible ? 'animate-in' : 'opacity-0'} transition-all duration-700`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group ${feature.bgColor}`}>
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-white/50 backdrop-blur-sm ${feature.color.replace('from-', 'text-').split(' ')[0]}`}>
                        {feature.stats}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900 text-left group-hover:text-gray-800 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 text-left leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Animated underline */}
                    <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-500" />
                  </CardContent>
                  
                  {/* Hover Effect Glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${feature.color}`} />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-3xl border border-gray-200/50 backdrop-blur-sm p-8 md:p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10x
              </div>
              <div className="text-gray-600 font-medium">Lebih Cepat</div>
              <div className="text-sm text-gray-500 mt-1">dari manual</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Akurasi</div>
              <div className="text-sm text-gray-500 mt-1">hasil ringkasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-600 font-medium">Kata per Ringkasan</div>
              <div className="text-sm text-gray-500 mt-1">maksimal</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Tersedia</div>
              <div className="text-sm text-gray-500 mt-1">setiap saat</div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px]" />
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Coba Sekarang
                  </span>
                  <br />
                  Rasakan Perbedaannya
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Tempelkan teks akademik Anda dan lihat bagaimana AI kami mengubahnya menjadi ringkasan yang padat dan bermakna dalam hitungan detik.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#try"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                  >
                    Coba Gratis Sekarang
                  </a>
                  <a
                    href="#demo"
                    className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-center backdrop-blur-sm"
                  >
                    Lihat Demo
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  {/* Mockup UI */}
                  <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-2xl">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <div className="ml-auto text-sm text-gray-400">AI Processing...</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="h-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse" />
                      <div className="h-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse w-4/5" />
                      <div className="h-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse w-3/5" />
                      <div className="h-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse w-full" />
                      <div className="h-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse w-2/3" />
                    </div>
                    
                    <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-cyan-400" />
                        <span className="text-cyan-400 font-semibold">Ringkasan Siap!</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Teks berhasil diringkas dengan akurasi tinggi dalam 1.2 detik.
                      </p>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}