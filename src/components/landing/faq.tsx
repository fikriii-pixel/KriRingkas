import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Apakah KriRingkas.ID gratis digunakan?',
    answer: 'Ya, KriRingkas.ID menyediakan 5 kali percobaan gratis setiap harinya. Untuk penggunaan tanpa batas, kami akan segera meluncurkan paket premium.',
  },
  {
    question: 'Jurnal atau teks apa saja yang didukung?',
    answer: 'Anda bisa menggunakan teks dari jurnal ilmiah, artikel, buku, atau sumber berbasis teks lainnya. Cukup salin dan tempel teks ke dalam area yang disediakan.',
  },
  {
    question: 'Seberapa akurat ringkasan yang dihasilkan AI?',
    answer: 'Kami menggunakan model AI canggih dari Google untuk memberikan hasil yang sangat akurat. Namun, ringkasan ini adalah alat bantu dan kami sarankan untuk tetap merujuk ke sumber aslinya untuk detail kritis.',
  },
  {
    question: 'Apakah data teks yang saya masukkan disimpan?',
    answer: 'Tidak. Kami sangat menjaga privasi Anda. Teks yang Anda masukkan hanya diproses untuk membuat ringkasan dan tidak disimpan di server kami.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="container py-20 md:py-24">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Pertanyaan Umum</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Temukan jawaban atas pertanyaan yang paling sering diajukan tentang layanan kami.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
