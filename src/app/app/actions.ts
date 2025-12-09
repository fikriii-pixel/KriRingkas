'use server';

import {
  generateStructuredAcademicSummary,
  type GenerateStructuredAcademicSummaryOutput,
} from '@/ai/flows/generate-structured-academic-summary';
import { z } from 'zod';

type ActionResult = {
  data?: GenerateStructuredAcademicSummaryOutput;
  error?: string;
};

async function getTextFromUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Gagal mengambil konten dari URL: ${response.statusText}`);
    }
    // Simple text extraction, might not work for all sites.
    const html = await response.text();
    // A very basic way to strip HTML tags.
    // For robust solution, a library like Cheerio would be better.
    const text = html.replace(/<style[^>]*>.*?<\/style>/gs, ' ')
                     .replace(/<script[^>]*>.*?<\/script>/gs, ' ')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
    return text;
  } catch (error) {
    console.error('Error fetching URL:', error);
    throw new Error('Tidak dapat mengambil atau memproses konten dari URL yang diberikan.');
  }
}

const actionInputSchema = z.object({
  inputType: z.enum(['text', 'pdf', 'url']),
  journalText: z.string().optional(),
  url: z.string().url().optional(),
  outputType: z.string(),
  language: z.string(),
  summaryIntensity: z.coerce.number(),
});

export async function summarizeJournalAction(
  formData: FormData
): Promise<ActionResult> {
  try {
    // We don't use file from client, so we don't validate it.
    const rawData = Object.fromEntries(formData.entries());
    const validatedInput = actionInputSchema.safeParse(rawData);
    
    if (!validatedInput.success) {
      return { error: 'Input tidak valid: ' + validatedInput.error.format()._errors.join(', ') };
    }

    const { inputType, journalText, url, outputType, language, summaryIntensity } = validatedInput.data;
    
    let textToSummarize = '';

    if (inputType === 'text') {
        textToSummarize = journalText || '';
    } else if (inputType === 'url' && url) {
        textToSummarize = await getTextFromUrl(url);
    }
    
    if (!textToSummarize.trim()) {
      // This can happen if URL fetch fails or PDF text is empty
      throw new Error('Tidak ada konten teks yang dapat diringkas. Pastikan URL valid atau file PDF berisi teks.');
    }

    const summary = await generateStructuredAcademicSummary({ 
      journalText: textToSummarize,
      outputType,
      language,
      summaryIntensity,
    });
    
    if (!summary || !summary.ringkasan || !summary.jargon) {
      throw new Error('Output AI tidak valid atau kosong.');
    }
    return { data: summary };
  } catch (e) {
    console.error('Error during summarization:', e);
    const errorMessage = e instanceof Error ? e.message : 'Terjadi kesalahan tidak diketahui pada server.';
    return { error: errorMessage };
  }
}
