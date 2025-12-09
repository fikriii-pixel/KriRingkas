'use server';

/**
 * @fileOverview A structured academic summary AI agent.
 *
 * - generateStructuredAcademicSummary - A function that handles the generation of structured academic summaries.
 * - GenerateStructuredAcademicSummaryInput - The input type for the generateStructuredAcademicSummary function.
 * - GenerateStructuredAcademicSummaryOutput - The return type for the generateStructuredAcademic-summary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStructuredAcademicSummaryInputSchema = z.object({
  journalText: z.string().describe('The text content of the journal article to summarize.'),
  outputType: z.string().describe('The desired output format (e.g., "Ringkasan naratif", "Poin Penting", "Daftar Pertanyaan", "Ide Konten").'),
  language: z.string().describe('The target language for the summary (e.g., "Indonesia", "Inggris", "Arab", "Jepang").'),
  summaryIntensity: z.number().describe('The intensity of the summarization from 0 to 100.'),
});
export type GenerateStructuredAcademicSummaryInput = z.infer<
  typeof GenerateStructuredAcademicSummaryInputSchema
>;

const GenerateStructuredAcademicSummaryOutputSchema = z.object({
  ringkasan: z.object({
    judul: z.string().describe('The title of the journal article.'),
    konten: z.string().describe('The main content of the summary, which could be a narrative, bullet points, questions, or content ideas, depending on the user\'s request.'),
    statistik: z.object({
        kataAsli: z.number().describe('Original word count.'),
        kataRingkasan: z.number().describe('Summarized word count.'),
        kataHilang: z.number().describe('Number of words removed.'),
        efektivitas: z.number().describe('Effectiveness of summarization in percentage.'),
    }).describe('Statistics about the summary.'),
  }).describe('Structured summary of the journal article.'),
  jargon: z.array(z.object({
    istilah: z.string().describe('Jargon term from the journal article.'),
    definisi: z.string().describe('Definition of the jargon term.'),
  })).describe('Explanation of jargon terms.'),
});

export type GenerateStructuredAcademicSummaryOutput = z.infer<
  typeof GenerateStructuredAcademicSummaryOutputSchema
>;

export async function generateStructuredAcademicSummary(
  input: GenerateStructuredAcademicSummaryInput
): Promise<GenerateStructuredAcademicSummaryOutput> {
  return generateStructuredAcademicSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateStructuredAcademicSummaryPrompt',
  input: {schema: GenerateStructuredAcademicSummaryInputSchema},
  output: {schema: GenerateStructuredAcademicSummaryOutputSchema},
  prompt: `Anda adalah asisten AI ahli dalam analisis dan peringkasan teks akademik.
Tugas Anda adalah menganalisis teks jurnal yang diberikan dan menghasilkan output sesuai dengan format yang diminta pengguna dalam bahasa target yang ditentukan.

Analisis teks jurnal berikut dan hasilkan output dengan detail ini:
1.  **Jenis Output**: Buat "{{outputType}}". 
    - Jika jenis output adalah "Poin Penting", setiap poin harus diawali dengan "● " (simbol bulat dan spasi) dan setiap poin harus dipisahkan oleh satu baris baru.
    - Jika jenis output adalah "Ide Konten", hasilkan daftar bernomor atau poin, hindari penggunaan simbol bintang (*), dan pisahkan setiap ide dengan satu baris baru agar lebih jelas.
    - Jika jenis output adalah "Daftar Pertanyaan", pastikan ada satu baris baru (jeda) antara setiap pertanyaan untuk keterbacaan yang lebih baik.
2.  **Bahasa Target**: Hasilkan semua output dalam Bahasa {{language}}.
3.  **Intensitas Ringkasan**: Gunakan tingkat intensitas ringkasan sebesar {{summaryIntensity}}%. Semakin tinggi nilainya, semakin padat ringkasannya.
4.  **Identifikasi Jargon**: Identifikasi istilah-istilah teknis atau jargon dalam teks dan berikan definisinya.
5.  **Statistik**: Hitung jumlah kata dalam teks asli dan hasil ringkasan. Berdasarkan itu, hitung jumlah kata yang dihilangkan dan persentase efektivitas (kata dihilangkan / kata asli).

Format output Anda **wajib** dalam bentuk JSON yang valid sesuai skema. Pastikan untuk mengisi semua field, termasuk ` + "`statistik`" + `.

Teks Jurnal:
{{{journalText}}}`,
});


const generateStructuredAcademicSummaryFlow = ai.defineFlow(
  {
    name: 'generateStructuredAcademicSummaryFlow',
    inputSchema: GenerateStructuredAcademicSummaryInputSchema,
    outputSchema: GenerateStructuredAcademicSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
