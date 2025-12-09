'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { summarizeJournalAction } from './actions';
import type { GenerateStructuredAcademicSummaryOutput } from '@/ai/flows/generate-structured-academic-summary';
import { useToast } from '@/hooks/use-toast';
import ResultsDisplay from './components/results-display';
import LoadingSkeleton from './components/loading-skeleton';
import InitialState from './components/initial-state';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { useDailyLimit } from '@/hooks/use-daily-limit';

export default function AppPage() {
  const [journalText, setJournalText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] =
    useState<GenerateStructuredAcademicSummaryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { checkLimit, incrementUsage } = useDailyLimit();

  const handleSummarize = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!journalText.trim()) {
      toast({
        title: 'Input Kosong',
        description: 'Harap masukkan teks jurnal untuk diringkas.',
        variant: 'destructive',
      });
      return;
    }

    if (!checkLimit()) {
      return; // The hook handles the toast message
    }

    setIsLoading(true);
    setResult(null);
    setError(null);

    const response = await summarizeJournalAction(journalText);

    if (response.error) {
      setError(response.error);
      toast({
        title: 'Terjadi Kesalahan',
        description: response.error,
        variant: 'destructive',
      });
    } else if (response.data) {
      setResult(response.data);
      incrementUsage();
    }

    setIsLoading(false);
  };

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span>Masukkan Teks Jurnal</span>
            </CardTitle>
            <CardDescription>
              Salin dan tempel konten jurnal ilmiah Anda di bawah ini untuk
              memulai.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSummarize} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="journal-text">Teks Jurnal</Label>
                <Textarea
                  id="journal-text"
                  placeholder="Tempelkan teks jurnal di sini..."
                  className="min-h-[300px] text-base"
                  value={journalText}
                  onChange={(e) => setJournalText(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary-mode">Mode Ringkasan</Label>
                <Select defaultValue="structured" disabled>
                  <SelectTrigger id="summary-mode">
                    <SelectValue placeholder="Pilih mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="structured">
                      Ringkasan Akademik Terstruktur
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sedang Meringkas...
                  </>
                ) : (
                  'Ringkas Sekarang'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="min-h-[500px] lg:min-h-0">
          {isLoading && <LoadingSkeleton />}
          {!isLoading && error && (
            <Alert variant="destructive" className="h-full">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Gagal Meringkas</AlertTitle>
              <AlertDescription>
                <p>{error}</p>
                <p className="mt-2">
                  Silakan coba lagi nanti atau periksa kembali teks yang Anda
                  masukkan.
                </p>
              </AlertDescription>
            </Alert>
          )}
          {!isLoading && !error && result && <ResultsDisplay result={result} />}
          {!isLoading && !error && !result && <InitialState />}
        </div>
      </div>
    </div>
  );
}
