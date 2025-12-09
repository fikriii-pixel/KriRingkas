"use client";
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Quote, GraduationCap, Trophy, Users, Target, Sparkles, CheckCircle, Zap, Award, TrendingUp, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Walidhani',
    role: 'Mahasiswa S1 Teknik Informatika Telkom University',
    text: 'Berkat KriRingkas.ID, saya bisa memahami jurnal metodologi yang rumit dalam 2 menit. Tugas review literatur Tesis saya selesai lebih cepat 80%.',
    rating: 5,
    avatar: 'WA',
    color: 'from-blue-500 to-cyan-500',
    verified: true,
    impact: 'Menghemat 40 jam/bulan',
    course: 'Skripsi Teknik Informatika',
    achievement: 'Lulus Cum Laude'
  },
  {
    id: 2,
    name: 'Rafi Ramadhan',
    role: 'Mahasiswa S1 Sistem Informasi UNPAM',
    text: 'Ringkasannya fokus ke hasil dan metode. Nggak buang-buang waktu baca pendahuluan yang panjang. Wajib coba!',
    rating: 5,
    avatar: 'RR',
    color: 'from-purple-500 to-pink-500',
    verified: true,
    impact: 'IPK naik 0.5 poin',
    course: 'Metodologi Penelitian',
    achievement: 'Presentasi Terbaik'
  },
  {
    id: 3,
    name: 'Dafa Ramadhan',
    role: 'Mahasiswa D1 Teknik Komputer STMIK Ganesha',
    text: 'Fitur penjelasan jargonnya luar biasa. Sangat membantu untuk paper-paper yang padat istilah teknis.',
    rating: 5,
    avatar: 'DR',
    color: 'from-green-500 to-emerald-500',
    verified: true,
    impact: 'Paham 95% materi',
    course: 'Jaringan Komputer',
    achievement: 'Nilai A+'
  },
  {
    id: 4,
    name: 'Refa Fahlefy',
    role: 'Mahasiswa S1 Informatika Widyatama University',
    text: 'Untuk disertasi, saya harus membaca puluhan jurnal setiap minggu. Alat ini penyelamat hidup. Akurasinya top.',
    rating: 5,
    avatar: 'RF',
    color: 'from-amber-500 to-orange-500',
    verified: true,
    impact: '30 jurnal/minggu',
    course: 'Disertasi S1',
    achievement: 'Publikasi Jurnal'
  },
  {
    id: 5,
    name: 'Eko Wibowo',
    role: 'Mahasiswa S1 Teknik Elektro ITS',
    text: 'UI-nya bersih banget dan gampang dipakai. Langsung copy-paste, klik, selesai. Nggak ribet.',
    rating: 5,
    avatar: 'EW',
    color: 'from-red-500 to-rose-500',
    verified: true,
    impact: 'Setup 2 menit',
    course: 'Tugas Akhir',
    achievement: 'Startup Founder'
  },
  {
    id: 6,
    name: 'Fitri Andini',
    role: 'Mahasiswa S2 Manajemen UNDIP',
    text: 'Awalnya ragu, tapi setelah coba gratis ternyata hasilnya bagus. Langsung mempertimbangkan langganan Pro untuk skripsi.',
    rating: 4.5,
    avatar: 'FA',
    color: 'from-indigo-500 to-purple-500',
    verified: true,
    impact: 'Upgrade ke Pro',
    course: 'Tesis Magister',
    achievement: 'Beasiswa LPDP'
  },
];

const universities = [
  'Telkom University', 'UNPAM', 'STMIK Ganesha', 'Widyatama University',
  'ITS', 'UNDIP', 'Universitas Brawijaya', 'UMY', 'Unair', 'UI'
];

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stats, setStats] = useState({
    students: 0,
    tasks: 0,
    hours: 0,
    rating: 0
  });

  useEffect(() => {
    // Animate stats counter
    const duration = 2000;
    const steps = 60;
    
    const interval = setInterval(() => {
      setStats(prev => ({
        students: Math.min(prev.students + 167, 10000),
        tasks: Math.min(prev.tasks + 500, 30000),
        hours: Math.min(prev.hours + 833, 50000),
        rating: Math.min(prev.rating + 0.083, 4.9)
      }));
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="social-proof" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-white to-purple-50/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-yellow-400 rounded-full animate-bounce" />
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

      <div className="container relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium mb-6">
            <Trophy className="w-4 h-4" />
            <span>Dibuktikan oleh Mahasiswa</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Suara Asli
            </span>
            {' '}dari Komunitas Akademik
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabung dengan <span className="font-semibold text-blue-600">10.000+ mahasiswa</span> dari universitas terbaik yang telah menghemat ribuan jam waktu belajar.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stats.students.toLocaleString()}+
              </div>
            </div>
            <div className="text-sm text-gray-600">Mahasiswa Aktif</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stats.tasks.toLocaleString()}+
              </div>
            </div>
            <div className="text-sm text-gray-600">Tugas Terselesaikan</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stats.hours.toLocaleString()}+
              </div>
            </div>
            <div className="text-sm text-gray-600">Jam Tersimpan</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stats.rating.toFixed(1)}
                <span className="text-lg text-gray-400">/5.0</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">Rating Rata-rata</div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kisah Sukses Mahasiswa</h3>
              <p className="text-gray-600">Cerita nyata dari pengguna KriRingkas.ID</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-bold text-gray-900">4.9/5.0</span>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Quote className="w-16 h-16 text-gray-400" />
                      </div>

                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(testimonial.rating)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : i < testimonial.rating
                                  ? 'fill-yellow-200 text-yellow-200'
                                  : 'fill-gray-200 text-gray-200'
                              }`}
                            />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-gray-700 mb-6 flex-grow italic relative">
                          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200 opacity-50" />
                          "{testimonial.text}"
                        </blockquote>

                        {/* User Info */}
                        <div className="mt-auto pt-6 border-t border-gray-100">
                          <div className="flex items-start gap-4">
                            {/* Avatar */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg`}>
                              <span className="text-white font-bold">{testimonial.avatar}</span>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                {testimonial.verified && (
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                              
                              {/* Achievement Badge */}
                              <div className="flex items-center gap-2">
                                <Award className="w-3 h-3 text-amber-500" />
                                <span className="text-xs font-medium text-gray-700">{testimonial.achievement}</span>
                              </div>
                            </div>
                          </div>

                          {/* Impact Stats */}
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-green-500" />
                                <span className="text-sm font-medium text-gray-700">{testimonial.impact}</span>
                              </div>
                              <div className="text-xs text-gray-500">{testimonial.course}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="static translate-y-0 hover:bg-blue-50" />
              <CarouselNext className="static translate-y-0 hover:bg-blue-50" />
            </div>
          </Carousel>
        </div>

        {/* Universities Banner */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dipercaya oleh Mahasiswa dari{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                50+ Universitas
              </span>
            </h3>
            <p className="text-gray-600">Termasuk universitas terbaik di Indonesia</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {universities.map((univ, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-gray-800">{univ}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       </div>
    </section>
  );
}