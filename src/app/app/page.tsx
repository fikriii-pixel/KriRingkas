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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  AlertCircle,
  FileText,
  Languages,
  Link,
  Loader2,
  Package,
  Sparkles,
  Upload,
  BookOpen,
  ListTree,
  HelpCircle,
  Lightbulb,
  SlidersHorizontal,
  Eraser,
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

type InputType = 'text' | 'pdf' | 'url';

export default function AppPage() {
  const [inputType, setInputType] = useState<InputType>('text');
  const [journalText, setJournalText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [url, setUrl] = useState('');
  
  const [outputType, setOutputType] = useState('');
  const [language, setLanguage] = useState('');
  const [summaryIntensity, setSummaryIntensity] = useState([25]);

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] =
    useState<GenerateStructuredAcademicSummaryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [isResetAlertOpen, setIsResetAlertOpen] = useState(false);

  const isButtonDisabled = isLoading || !outputType || !language ||
    (inputType === 'text' && !journalText.trim()) ||
    (inputType === 'pdf' && !file) ||
    (inputType === 'url' && !url.trim());

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setFileError('Hanya file PDF yang diizinkan.');
        setFile(null);
      } else {
        setFileError(null);
        setFile(selectedFile);
      }
    }
  };

  const handleSummarize = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isButtonDisabled) {
      toast({
        title: 'Input Tidak Lengkap',
        description: 'Harap lengkapi semua input dan pilihan sebelum meringkas.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setResult(null);
    setError(null);
    
    try {
        const formData = new FormData();
        formData.append('inputType', inputType);
        formData.append('outputType', outputType);
        formData.append('language', language);
        formData.append('summaryIntensity', String(summaryIntensity[0]));

        if (inputType === 'text') {
            formData.append('journalText', journalText);
        } else if (inputType === 'url') {
            formData.append('url', url);
        } else if (inputType === 'pdf' && file) {
            formData.append('pdfFile', file);
        }

        const response = await summarizeJournalAction(formData);

        if (response.error) {
            setError(response.error);
            toast({
                title: 'Terjadi Kesalahan',
                description: response.error,
                variant: 'destructive',
            });
        } else if (response.data) {
            setResult(response.data);
        }
    } catch (e: any) {
        const errorMessage = e instanceof Error ? e.message : 'Gagal memproses input.';
        setError(errorMessage);
        toast({
            title: 'Gagal Memproses',
            description: errorMessage,
            variant: 'destructive',
        });
    }

    setIsLoading(false);
  };
  
  const handleReset = () => {
    setResult(null);
    setError(null);
    setIsResetAlertOpen(false);
    toast({
        title: 'Hasil Direset',
        description: 'Hasil ringkasan telah dibersihkan.',
    });
  };

  return (
    <>
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span>Input Data Jurnal</span>
            </CardTitle>
            <CardDescription>
              Pilih metode input, tentukan output, lalu biarkan AI bekerja.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSummarize} className="space-y-6">
              <Tabs value={inputType} onValueChange={(v) => setInputType(v as InputType)} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="text" className="hover:bg-muted/50 data-[state=active]:bg-background">
                    <FileText className="mr-2" /> Teks
                  </TabsTrigger>
                  <TabsTrigger value="pdf" className="hover:bg-muted/50 data-[state=active]:bg-background">
                    <Upload className="mr-2" /> PDF
                  </TabsTrigger>
                  <TabsTrigger value="url" className="hover:bg-muted/50 data-[state=active]:bg-background">
                    <Link className="mr-2" /> URL
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="text" className="mt-4 space-y-2">
                  <Label htmlFor="journal-text">Teks Jurnal</Label>
                  <Textarea
                    id="journal-text"
                    placeholder="Tempelkan teks jurnal di sini..."
                    className="min-h-[200px] text-base"
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    disabled={isLoading}
                  />
                </TabsContent>
                <TabsContent value="pdf" className="mt-4 space-y-2">
                   <Label htmlFor="pdf-upload">Unggah File PDF</Label>
                    <div className="flex items-center space-x-2">
                        <Input id="pdf-upload" name="file" type="file" accept="application/pdf" onChange={handleFileChange} disabled={isLoading} className="cursor-pointer file:cursor-pointer file:text-primary file:font-semibold hover:file:bg-primary/10"/>
                    </div>
                    {file && <p className="text-sm text-muted-foreground">File terpilih: {file.name}</p>}
                    {fileError && <p className="text-sm text-destructive">{fileError}</p>}
                </TabsContent>
                <TabsContent value="url" className="mt-4 space-y-2">
                    <Label htmlFor="url-input">URL Artikel/Jurnal</Label>
                    <Input id="url-input" type="url" placeholder="https://example.com/journal.html" value={url} onChange={(e) => setUrl(e.target.value)} disabled={isLoading} />
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                  <Label htmlFor="summary-intensity" className="flex items-center gap-2"><SlidersHorizontal />Intensitas Ringkasan: {summaryIntensity[0]}%</Label>
                  <Slider
                    id="summary-intensity"
                    min={0}
                    max={50}
                    step={10}
                    value={summaryIntensity}
                    onValueChange={setSummaryIntensity}
                    disabled={isLoading}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Kurang Padat</span>
                    <span>Sangat Padat</span>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="output-type" className="flex items-center gap-2"><Package/>Jenis</Label>
                  <Select value={outputType} onValueChange={setOutputType} disabled={isLoading}>
                    <SelectTrigger id="output-type">
                      <SelectValue placeholder="Pilih jenis output" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ringkasan naratif"><div className="flex items-center gap-2"><BookOpen /> Ringkasan Naratif</div></SelectItem>
                      <SelectItem value="Poin Penting"><div className="flex items-center gap-2"><ListTree /> Poin Penting</div></SelectItem>
                      <SelectItem value="Daftar Pertanyaan"><div className="flex items-center gap-2"><HelpCircle /> Daftar Pertanyaan</div></SelectItem>
                      <SelectItem value="Ide Konten"><div className="flex items-center gap-2"><Lightbulb /> Saran Ide Konten</div></SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="flex items-center gap-2"><Languages/>Bahasa</Label>
                  <Select value={language} onValueChange={setLanguage} disabled={isLoading}>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Pilih bahasa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Indonesia">Indonesia</SelectItem>
                      <SelectItem value="Inggris">Inggris</SelectItem>
                      <SelectItem value="Arab">Arab</SelectItem>
                      <SelectItem value="Jepang">Jepang</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 text-lg transition-all duration-300 ease-in-out hover:shadow-lg disabled:hover:shadow-none" disabled={isButtonDisabled}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sedang Memproses...
                  </>
                ) : (
                  'Buat Ringkasan'
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
                  Silakan coba lagi nanti atau periksa kembali input Anda.
                </p>
              </AlertDescription>
            </Alert>
          )}
          {!isLoading && !error && result && <ResultsDisplay result={result} onReset={() => setIsResetAlertOpen(true)} />}
          {!isLoading && !error && !result && <InitialState />}
        </div>
      </div>
    </div>
    <AlertDialog open={isResetAlertOpen} onOpenChange={setIsResetAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda Yakin?</AlertDialogTitle>
            <AlertDialogDescription>
              Tindakan ini akan menghapus hasil ringkasan saat ini secara permanen. Anda tidak dapat mengurungkan tindakan ini.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleReset}>Lanjutkan & Reset</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
