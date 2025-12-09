'use server';

import {
  generateStructuredAcademicSummary,
  type GenerateStructuredAcademicSummaryOutput,
} from '@/ai/flows/generate-structured-academic-summary';

type ActionResult = {
  data?: GenerateStructuredAcademicSummaryOutput;
  error?: string;
};

export async function summarizeJournalAction(
  journalText: string
): Promise<ActionResult> {
  try {
    const summary = await generateStructuredAcademicSummary({ journalText });
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
