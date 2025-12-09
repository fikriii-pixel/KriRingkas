"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Brain, FileText, AlertTriangle, Hourglass, BookOpen, TrendingDown, XCircle, Zap, Target, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const problems = [
  {
    icon: Hourglass,
    title: 'Waktu Terbuang Percuma',
    text: 'Merangkum satu jurnal tebal bisa memakan waktu 3-5 jam dari jadwal belajar Anda.',
    stats: '5+ jam terbuang',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-red-50 to-orange-50',
    details: ['3 jam membaca', '1.5 jam mencatat', '0.5 jam menyusun ulang']
  },
  {
    icon: Brain,
    title: 'Overload Kognitif',
    text: 'Bahasa akademik dan istilah metodologi yang kompleks membuat pemahaman jadi lambat dan sulit.',
    stats: '70% lebih lambat',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    details: ['Jargon kompleks', 'Struktur tidak jelas', 'Konteks terpisah']
  },
  {
    icon: BookOpen,
    title: 'Intisari Tersembunyi',
    text: 'Kesulitan menemukan poin kunci dari ratusan halaman karena informasi penting tersebar.',
    stats: '40% efisiensi',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    details: ['Info tidak terstruktur', 'Kesimpulan tersembunyi', 'Data berulang']
  }
];

const painPoints = [
  "Deadline tugas semakin dekat tapi jurnal belum selesai dirangkum",
  "Frustasi karena membaca berulang-ulang tapi tidak paham intinya",
  "Waktu presentasi sudah dekat, materi masih berantakan",
  "Skripsi mentok karena literatur terlalu banyak dan kompleks",
  "Nilai turun karena kurang referensi yang relevan",
  "Tidur larut malam hanya untuk membaca 1 jurnal"
];

export default function Problem() {
  const [activePainPoint, setActivePainPoint] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('problem');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Rotate pain points
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePainPoint((prev) => (prev + 1) % painPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Background - Dark theme for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ef4444 1px, transparent 1px),
                           linear-gradient(to bottom, #ef4444 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-400 rounded-full animate-bounce" />

      <div className="container relative">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-900/30 to-orange-900/30 text-red-300 font-medium mb-6 border border-red-800/30 backdrop-blur-sm">
            <AlertTriangle className="w-4 h-4" />
            <span>Masalah Nyata Mahasiswa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Berhenti Membuang
            </span>
            <br />
            <span className="text-white">Waktu Berharga Anda</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Setiap jam yang terbuang untuk membaca manual adalah{' '}
            <span className="font-semibold text-red-300">kesempatan belajar yang hilang</span>.
            Waktu Anda berharga — jangan biarkan tugas teknis menghambat potensi akademik Anda.
          </p>
        </div>

        {/* Rotating Pain Point Banner */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-6 border border-red-800/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingDown className="w-5 h-5 text-red-400" />
                  <span className="text-red-300 font-semibold">Frustasi Akademik #1</span>
                </div>
                <div className="h-8 flex items-center">
                  <p className="text-white text-lg font-medium transition-all duration-500">
                    {painPoints[activePainPoint]}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="flex gap-1">
                  {painPoints.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activePainPoint 
                          ? 'bg-red-400 w-6' 
                          : 'bg-red-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <CardContent className="relative z-10 p-8">
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${problem.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="px-3 py-1 bg-red-900/30 text-red-300 rounded-full text-sm font-medium border border-red-800/50">
                        {problem.stats}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-100 transition-colors">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {problem.text}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2 mb-6">
                      {problem.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm text-gray-400"
                        >
                          <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                            <XCircle className="w-3 h-3 text-red-400" />
                          </div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Impact Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Efisiensi Waktu</span>
                        <span className="text-red-400">Rendah</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${problem.color} transition-all duration-1000`}
                          style={{ 
                            width: index === 0 ? '20%' : 
                                   index === 1 ? '30%' : '40%' 
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Time Loss Calculator */}
        <div className={`bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Hitung{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Kerugian Waktu
              </span>{' '}
              Anda
            </h3>
            <p className="text-gray-300">
              Berapa jam yang sudah terbuang karena metode manual?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Jurnal per Minggu', value: '5-8 jam', icon: FileText },
              { label: 'Skripsi per Bulan', value: '80+ jam', icon: BookOpen },
              { label: 'Tugas per Semester', value: '120+ jam', icon: Clock },
              { label: 'Total Potensial', value: '200+ jam', icon: Hourglass }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-800/30">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        </div>
    </section>
  );
}