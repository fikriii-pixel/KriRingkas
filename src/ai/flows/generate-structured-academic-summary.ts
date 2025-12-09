'use server';

/**
 * @fileOverview A structured academic summary AI agent.
 *
 * - generateStructuredAcademicSummary - A function that handles the generation of structured academic summaries.
 * - GenerateStructuredAcademicSummaryInput - The input type for the generateStructuredAcademicSummary function.
 * - GenerateStructuredAcademicSummaryOutput - The return type for the generateStructuredAcademicSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateStructuredAcademicSummaryInputSchema = z.object({
  journalText: z.string().describe('The text content of the journal article to summarize.'),
});
export type GenerateStructuredAcademicSummaryInput = z.infer<
  typeof GenerateStructuredAcademicSummaryInputSchema
>;

const GenerateStructuredAcademicSummaryOutputSchema = z.object({
  ringkasan: z.object({
    judul: z.string().describe('The title of the journal article.'),
    metode: z.string().describe('The methods used in the study.'),
    hasil: z.string().describe('The results of the study.'),
    kesimpulan: z.string().describe('The conclusion of the study.'),
    poin: z.array(z.string()).describe('Key points from the journal article.'),
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
  prompt: `Analisis teks jurnal berikut dan buatkan Ringkasan Akademik Terstruktur dalam Bahasa Indonesia formal. Output wajib JSON.\n\nJurnal:\n{{{journalText}}}`,
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
