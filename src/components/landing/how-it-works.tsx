"use client";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardPaste, Settings, Sparkles, ArrowRight, CheckCircle, Zap, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    step: 1,
    title: 'Tempelkan Teks',
    description: 'Salin dan tempelkan seluruh teks jurnal ilmiah, artikel, atau laporan ke dalam kotak input yang disediakan.',
    icon: ClipboardPaste,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    time: '3 detik',
    details: ['Support 10.000+ kata', 'Multi-format teks', 'Auto-detect bahasa']
  },
  {
    step: 2,
    title: 'Pilih Mode AI',
    description: 'Tentukan mode ringkasan yang Anda butuhkan: ringkasan cepat, akademik terstruktur, atau poin-poin kunci.',
    icon: Settings,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    time: '2 detik',
    details: ['3 mode berbeda', 'Custom panjang output', 'Prioritaskan section']
  },
  {
    step: 3,
    title: 'Dapatkan Hasil',
    description: 'AI akan menyajikan ringkasan formal dan poin-poin penting, lengkap dengan penjelasan jargon ilmiah.',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    time: '1.8 detik',
    details: ['Akurasi 95%+', 'Format akademik', 'Download ready']
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [counter, setCounter] = useState(0);

  // Animate step counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Auto cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/10 to-purple-50/10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl" />
      
      {/* Animated Dots */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Proses Super Cepat</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hanya{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              3 Langkah Mudah
            </span>
            <br />
            Menuju Intisari Jurnal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proses yang dirancang untuk{' '}
            <span className="font-semibold text-blue-600">maksimal efisiensi</span>, 
            mengubah teks akademik panjang menjadi pengetahuan siap pakai{' '}
            <span className="inline-flex items-center gap-1 font-semibold text-purple-600">
              dalam 6.8 detik
              <Clock className="w-5 h-5" />
            </span>
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 hidden lg:block" />
          
          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.step}
                  className="relative group"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8">
                      <ArrowRight className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
                    </div>
                  )}

                  {/* Step Card */}
                  <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    isActive ? 'scale-105' : 'scale-100'
                  } ${step.bgColor}`}>
                    {/* Animated Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        {/* Step Number */}
                        <div className={`relative w-20 h-20 rounded-full ${step.bgColor} border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-20`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                              <span className="text-2xl font-bold text-white">{step.step}</span>
                            </div>
                          </div>
                        </div>

                        {/* Time Badge */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50">
                          <Clock className="w-4 h-4 text-gray-600" />
                          <span className="font-semibold text-gray-900">{step.time}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-sm text-gray-700"
                          >
                            <div className={`w-5 h-5 rounded-full ${step.bgColor} flex items-center justify-center`}>
                              <CheckCircle className={`w-3 h-3 ${step.color.replace('from-', 'text-').split(' ')[0]}`} />
                            </div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-6">
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000`}
                            style={{ width: isActive ? '100%' : '0%' }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                          <span>Start</span>
                          <span className="font-medium">{step.time}</span>
                          <span>Complete</span>
                        </div>
                      </div>
                    </CardContent>

                    {/* Hover Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
                  </Card>

                  {/* Floating Animation */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-r ${step.color} rounded-full animate-ping`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total Time Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-200/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Total waktu proses:</span>
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ≤ 7 detik
              </div>
              <div className="text-sm text-gray-500">
                untuk teks 10.000 kata
              </div>
            </div>
          </div>
        </div>

        {/* Live Demo Preview */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Lihat Prosesnya
                  </span>
                  {' '}Secara Live
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Simulasi real-time menunjukkan bagaimana teks akademik panjang diolah menjadi ringkasan yang presisi dalam hitungan detik.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white font-medium">AI Processing Active</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full" />
                    <span className="text-gray-300">Step {activeStep + 1} of {steps.length}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-purple-400 rounded-full" />
                    <span className="text-gray-300">{steps[activeStep].time} per step</span>
                  </div>
                </div>
              </div>

              {/* Demo Terminal */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-auto text-sm text-gray-400">
                    AI Terminal • KriRingkas.ID
                  </div>
                </div>

                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-green-400">$</span>
                    <span>Processing {steps[activeStep].title.toLowerCase()}...</span>
                  </div>
                  <div className="text-cyan-400 ml-4">
                    {'>'} Status: <span className="text-green-400">ACTIVE</span>
                  </div>
                  <div className="text-blue-400 ml-4">
                    {'>'} Time elapsed: <span className="text-yellow-400">{steps[activeStep].time}</span>
                  </div>
                  <div className="text-purple-400 ml-4">
                    {'>'} Progress: [
                    {Array.from({ length: counter }).map((_, i) => (
                      <span key={i} className="text-green-400">█</span>
                    ))}
                    {Array.from({ length: 4 - counter }).map((_, i) => (
                      <span key={i} className="text-gray-600">░</span>
                    ))}
                    ] {counter * 25}%
                  </div>
                  <div className="text-gray-300 ml-4 mt-4">
                    {'>'} Next step: {steps[(activeStep + 1) % steps.length].title}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Live AI Processing</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400">Connected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}