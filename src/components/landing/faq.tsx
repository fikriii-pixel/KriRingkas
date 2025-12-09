import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Apakah teks yang saya masukkan aman dan rahasia?',
    answer: 'Tentu saja. Kami sangat menjaga privasi Anda. Teks yang Anda masukkan hanya diproses untuk membuat ringkasan dan tidak disimpan atau digunakan untuk melatih model AI kami.',
  },
  {
    question: 'Seberapa akurat ringkasan yang dihasilkan?',
    answer: 'Kami menggunakan model AI canggih dari Google (Gemini) untuk memberikan hasil yang sangat akurat dan relevan dengan konteks akademik. Namun, ini adalah alat bantu, dan kami sarankan Anda tetap merujuk ke sumber asli untuk detail kritis.',
  },
  {
    question: 'Apakah KriRingkas.ID cocok untuk mahasiswa S1 dan S2?',
    answer: 'Ya, platform ini dirancang untuk membantu mahasiswa di semua tingkatan, dari S1 yang sedang mengerjakan tugas makalah hingga S2 yang sedang menyusun tesis atau disertasi.',
  },
  {
    question: 'Bagaimana AI menangani jargon ilmiah?',
    answer: 'AI kami secara otomatis mendeteksi istilah-istilah teknis atau jargon dalam teks dan memberikan penjelasan yang mudah dipahami, membantu Anda mengerti konsep-konsep sulit dengan cepat.',
  },
  {
    question: 'Apakah saya bisa merangkum dari file PDF?',
    answer: 'Secara langsung belum bisa, namun solusinya sangat mudah. Anda hanya perlu menyalin (copy) seluruh teks dari file PDF Anda dan menempelkannya (paste) ke dalam kotak input di aplikasi kami.',
  },
  {
    question: 'Apakah mendukung Bahasa Indonesia dan Inggris?',
    answer: 'Saat ini, output kami dioptimalkan untuk Bahasa Indonesia formal yang sesuai kaidah akademik. Anda bisa memasukkan teks berbahasa Inggris, dan ringkasannya akan tetap dalam Bahasa Indonesia.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="container py-20 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Temukan jawaban atas pertanyaan umum tentang layanan KriRingkas.ID.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
