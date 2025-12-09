import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sparkles, Shield, Target, GraduationCap, FileText, Globe } from 'lucide-react';

const faqData = [
  {
    question: 'Apakah teks yang saya masukkan aman dan rahasia?',
    answer: 'Tentu saja. Kami sangat menjaga privasi Anda. Teks yang Anda masukkan hanya diproses untuk membuat ringkasan dan tidak disimpan atau digunakan untuk melatih model AI kami.',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    question: 'Seberapa akurat ringkasan yang dihasilkan?',
    answer: 'Kami menggunakan model AI canggih dari Google (Gemini) untuk memberikan hasil yang sangat akurat dan relevan dengan konteks akademik. Namun, ini adalah alat bantu, dan kami sarankan Anda tetap merujuk ke sumber asli untuk detail kritis.',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    question: 'Apakah KriRingkas.ID cocok untuk mahasiswa S1 dan S2?',
    answer: 'Ya, platform ini dirancang untuk membantu mahasiswa di semua tingkatan, dari S1 yang sedang mengerjakan tugas makalah hingga S2 yang sedang menyusun tesis atau disertasi.',
    icon: GraduationCap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    question: 'Bagaimana AI menangani jargon ilmiah?',
    answer: 'AI kami secara otomatis mendeteksi istilah-istilah teknis atau jargon dalam teks dan memberikan penjelasan yang mudah dipahami, membantu Anda mengerti konsep-konsep sulit dengan cepat.',
    icon: Sparkles,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    question: 'Apakah saya bisa merangkum dari file PDF?',
    answer: 'Secara langsung belum bisa, namun solusinya sangat mudah. Anda hanya perlu menyalin (copy) seluruh teks dari file PDF Anda dan menempelkannya (paste) ke dalam kotak input di aplikasi kami.',
    icon: FileText,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    question: 'Apakah mendukung Bahasa Indonesia dan Inggris?',
    answer: 'Saat ini, output kami dioptimalkan untuk Bahasa Indonesia formal yang sesuai kaidah akademik. Anda bisa memasukkan teks berbahasa Inggris, dan ringkasannya akan tetap dalam Bahasa Indonesia.',
    icon: Globe,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="container relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas semua pertanyaan Anda tentang layanan KriRingkas.ID. 
            Masih ada yang belum terjawab?{' '}
            <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Hubungi kami
            </a>
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <div 
                  key={index}
                  className="group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Accordion 
                    type="single" 
                    collapsible 
                    className={`rounded-2xl border ${faq.bgColor} border-gray-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-gray-300`}
                  >
                    <AccordionItem value={`item-${index}`} className="border-0">
                      <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-white/50 transition-colors">
                        <div className="flex items-start gap-4 text-left">
                          <div className={`flex-shrink-0 w-12 h-12 ${faq.bgColor} rounded-xl flex items-center justify-center group-data-[state=open]:${faq.bgColor}`}>
                            <Icon className={`w-6 h-6 ${faq.color}`} />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-lg leading-tight">
                              {faq.question}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-5">
                        <div className="pl-16">
                          <div className={`h-1 w-12 ${faq.bgColor} rounded-full mb-4`} />
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                          {index === 0 && (
                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                              <Shield className="w-4 h-4" />
                              <span>100% Aman & Terenkripsi</span>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                              <Target className="w-4 h-4" />
                              <span>Akurasi Tinggi dengan AI Gemini</span>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Aman & Privasi Terjaga</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Akurasi Hasil</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Pengguna Aktif</div>
            </div>
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-sm">
              <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
              <div className="text-gray-600">Tersedia Setiap Saat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}