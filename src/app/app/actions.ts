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

async function getTextFromPdf(file: File): Promise<string> {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const data = await pdf(buffer);
        return data.text;
    } catch (error) {
        console.error('Error parsing PDF:', error);
        throw new Error('Gagal memproses file PDF. Pastikan file tidak rusak atau terenkripsi.');
    }
}


const actionInputSchema = z.object({
  inputType: z.enum(['text', 'pdf', 'url']),
  journalText: z.string().optional(),
  url: z.string().url().optional(),
  pdfFile: z.instanceof(File).optional(),
  outputType: z.string(),
  language: z.string(),
  summaryIntensity: z.coerce.number(),
});


export async function summarizeJournalAction(
  formData: FormData
): Promise<ActionResult> {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validatedInput = actionInputSchema.safeParse(rawData);
    
    if (!validatedInput.success) {
        const errorMessages = Object.entries(validatedInput.error.flatten().fieldErrors)
            .map(([key, value]) => `${key}: ${value.join(', ')}`)
            .join('; ');
      return { error: 'Input tidak valid: ' + errorMessages };
    }

    const { inputType, journalText, url, pdfFile, outputType, language, summaryIntensity } = validatedInput.data;
    
    let textToSummarize = '';

    if (inputType === 'text') {
        textToSummarize = journalText || '';
    } else if (inputType === 'url' && url) {
        textToSummarize = await getTextFromUrl(url);
    } else if (inputType === 'pdf' && pdfFile) {
        textToSummarize = await getTextFromPdf(pdfFile);
    }
    
    if (!textToSummarize.trim()) {
      throw new Error('Tidak ada konten teks yang dapat diringkas. Pastikan input valid atau file berisi teks.');
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
