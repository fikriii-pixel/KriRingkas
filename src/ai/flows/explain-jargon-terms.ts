'use server';
/**
 * @fileOverview Jargon explanation AI agent.
 *
 * - explainJargonTerms - A function that handles the jargon explanation process.
 * - ExplainJargonTermsInput - The input type for the explainJargonTerms function.
 * - ExplainJargonTermsOutput - The return type for the explainJargonTerms function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExplainJargonTermsInputSchema = z.object({
  journalText: z.string().describe('The text of the journal article.'),
});
export type ExplainJargonTermsInput = z.infer<typeof ExplainJargonTermsInputSchema>;

const ExplainJargonTermsOutputSchema = z.object({
  jargon: z
    .array(
      z.object({
        istilah: z.string().describe('The jargon term.'),
        definisi: z.string().describe('The definition of the jargon term.'),
      })
    )
    .describe('A list of jargon terms and their definitions.'),
});
export type ExplainJargonTermsOutput = z.infer<typeof ExplainJargonTermsOutputSchema>;

export async function explainJargonTerms(input: ExplainJargonTermsInput): Promise<ExplainJargonTermsOutput> {
  return explainJargonTermsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'explainJargonTermsPrompt',
  input: {schema: ExplainJargonTermsInputSchema},
  output: {schema: ExplainJargonTermsOutputSchema},
  prompt: `Analisis teks jurnal berikut dan identifikasi istilah-istilah jargon yang digunakan di dalamnya. Berikan definisi yang jelas dan ringkas untuk setiap istilah dalam Bahasa Indonesia formal. Output wajib JSON dengan format:

{ "jargon": [{"istilah": "", "definisi": ""}] }

Teks Jurnal: {{{journalText}}}`,
});

const explainJargonTermsFlow = ai.defineFlow(
  {
    name: 'explainJargonTermsFlow',
    inputSchema: ExplainJargonTermsInputSchema,
    outputSchema: ExplainJargonTermsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
