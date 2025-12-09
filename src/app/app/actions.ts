'use server';

import {
  generateStructuredAcademicSummary,
  type GenerateStructuredAcademicSummaryOutput,
} from '@/ai/flows/generate-structured-academic-summary';
import { z } from 'zod';
import pdf from 'pdf-parse';

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
    const html = await response.text();
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
  file: z.instanceof(File).optional(),
  url: z.string().url().optional(),
  outputType: z.string(),
  language: z.string(),
  summaryIntensity: z.coerce.number(),
});

export async function summarizeJournalAction(
  formData: FormData
): Promise<ActionResult> {
  try {
    const validatedInput = actionInputSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedInput.success) {
      return { error: 'Input tidak valid: ' + validatedInput.error.format()._errors.join(', ') };
    }

    const { inputType, journalText, file, url, outputType, language, summaryIntensity } = validatedInput.data;
    
    let textToSummarize = '';

    if (inputType === 'text') {
        textToSummarize = journalText || '';
    } else if (inputType === 'url' && url) {
        textToSummarize = await getTextFromUrl(url);
    } else if (inputType === 'pdf' && file) {
        try {
            const buffer = Buffer.from(await file.arrayBuffer());
            const data = await pdf(buffer);
            textToSummarize = data.text;
        } catch (pdfError) {
            console.error("Error parsing PDF on server:", pdfError);
            throw new Error("Gagal membaca file PDF. Pastikan file tidak rusak atau terenkripsi.");
        }
    }

    if (!textToSummarize.trim()) {
      throw new Error('Tidak ada konten teks yang dapat diringkas.');
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
