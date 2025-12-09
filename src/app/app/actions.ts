'use server';

import {
  generateStructuredAcademicSummary,
  type GenerateStructuredAcademicSummaryInput,
  type GenerateStructuredAcademicSummaryOutput,
} from '@/ai/flows/generate-structured-academic-summary';
import { z } from 'zod';

type ActionResult = {
  data?: GenerateStructuredAcademicSummaryOutput;
  error?: string;
};

// Simple and insecure web scraping. In a real app, use a robust library like Cheerio or Puppeteer.
async function getTextFromUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Gagal mengambil konten dari URL: ${response.statusText}`);
    }
    const html = await response.text();
    // This is a very basic way to extract text. It will not work well for complex sites.
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
  fileContent: z.string().optional(), // Base64 encoded file
  url: z.string().url().optional(),
  outputType: z.string(),
  language: z.string(),
});


export async function summarizeJournalAction(
  input: unknown
): Promise<ActionResult> {
  try {
    const validatedInput = actionInputSchema.safeParse(input);
    if (!validatedInput.success) {
      return { error: 'Input tidak valid: ' + validatedInput.error.format()._errors.join(', ') };
    }

    const { inputType, journalText, fileContent, url, outputType, language } = validatedInput.data;
    
    let textToSummarize = '';

    if (inputType === 'text') {
      if (!journalText) throw new Error('Teks jurnal tidak boleh kosong.');
      textToSummarize = journalText;
    } else if (inputType === 'pdf') {
      if (!fileContent) throw new Error('Konten file PDF tidak ditemukan.');
      // This is a placeholder for server-side PDF text extraction.
      // For a real implementation, you would use a library like pdf-parse.
      // Here, we'll simulate by assuming the client sends plain text for now.
      // In a real scenario, you'd process the base64 data.
      textToSummarize = `(Konten dari PDF) ${Buffer.from(fileContent, 'base64').toString('utf-8')}`;
    } else if (inputType === 'url') {
      if (!url) throw new Error('URL tidak boleh kosong.');
      textToSummarize = await getTextFromUrl(url);
    }

    if (!textToSummarize.trim()) {
      throw new Error('Tidak ada konten teks yang dapat diringkas.');
    }

    const summary = await generateStructuredAcademicSummary({ 
      journalText: textToSummarize,
      outputType,
      language
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
