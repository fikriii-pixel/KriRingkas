"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Sparkles, Zap, CheckCircle, Users, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const [typedText, setTypedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const texts = [
    "jurnal penelitian 10.000 kata",
    "skripsi bab 3 metodologi",
    "artikel akademik tebal",
    "tesis literatur review",
    "makalah penelitian ilmiah"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length + 1));
      }, 100);
    } else if (!isDeleting && typedText.length === currentText.length) {
      // Pause at end
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length - 1));
      }, 50);
    } else if (isDeleting && typedText.length === 0) {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentTextIndex, texts]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Stats animation
  const [counters, setCounters] = useState({
    students: 0,
    journals: 0,
    timeSaved: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const incrementStudents = 10000 / steps;
    const incrementJournals = 50000 / steps;
    const incrementTime = 50000 / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounters({
          students: Math.round(incrementStudents * currentStep),
          journals: Math.round(incrementJournals * currentStep),
          timeSaved: Math.round(incrementTime * currentStep)
        });
      } else {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                           linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-15 md:pt-18 pb-20 md:pb-32">
          {/* Left Column - Content */}
          <div className="space-y-8">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-gray-900">
                Transformasi
              </span>
              <span className="block mt-2">
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Pemahaman Akademik
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                </span>
              </span>
              <span className="block text-gray-900 mt-4">
                dalam{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hitungan Detik
                </span>
              </span>
            </h1>

            {/* Typewriter Section */}
            <div className="mt-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-gray-500 font-medium">AI sedang merangkum:</span>
              </div>
              <div className="text-2xl font-semibold text-gray-900 h-12 flex items-center">
                <span className="text-blue-600">"</span>
                {typedText}
                <span className={`inline-block w-0.5 h-8 mx-1 bg-blue-600 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
                <span className="text-blue-600">"</span>
              </div>
              <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Estimasi selesai: <span className="font-semibold text-blue-600">3.2 detik</span></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Ringkas <span className="font-semibold text-blue-600">jurnal tebal, tesis, dan literatur akademik</span> dengan presisi tinggi menggunakan teknologi AI terbaru dari Google. Fokus pada analisis, biarkan AI yang mengekstraksi intisari.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
              
                asChild 
                className="text-lg h-14 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/app" className="flex items-center gap-2">
                  <span>Coba Sekarang</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span>{counters.students.toLocaleString()}+</span>
                </div>
                <div className="text-sm text-gray-600">Mahasiswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <span>{counters.journals.toLocaleString()}+</span>
                </div>
                <div className="text-sm text-gray-600">Jurnal Dirangkum</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-3xl font-bold text-gray-900 mb-1">
                  <Clock className="w-6 h-6 text-green-500" />
                  <span>{counters.timeSaved.toLocaleString()}+</span>
                </div>
                <div className="text-sm text-gray-600">Jam Tersimpan</div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-gray-200/50">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Privasi Terjamin</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Tanpa Registrasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Akurasi 95%+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 w-64 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200/50 backdrop-blur-sm z-20 animate-float-slow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">1.8 Detik</div>
                  <div className="text-sm text-gray-600">Waktu Rata-rata</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-72 bg-white rounded-2xl p-4 shadow-2xl border border-gray-200/50 backdrop-blur-sm z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">AI Terverifikasi</div>
                  <div className="text-sm text-gray-600">Google Gemini 2.0</div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl" />
              
              {heroImage && (
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={800}
                    height={600}
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                    data-ai-hint={heroImage.imageHint}
                    priority
                  />
                  
                  {/* Image Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Live Processing Indicator */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 px-3 py-2 bg-black/70 backdrop-blur-sm rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white text-sm font-medium">Live Processing</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gradient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}