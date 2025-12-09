import type { GenerateStructuredAcademicSummaryOutput } from '@/ai/flows/generate-structured-academic-summary';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { BookMarked, FileText, Copy, Download } from 'lucide-react';
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

interface ResultsDisplayProps {
  result: GenerateStructuredAcademicSummaryOutput;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { ringkasan, jargon } = result;
  const { toast } = useToast();

  const copyToClipboard = () => {
    // Create a temporary element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = ringkasan.konten.replace(/<br \/>/g, '\n');
    const plainText = tempDiv.textContent || tempDiv.innerText || '';
    
    navigator.clipboard.writeText(plainText).then(() => {
      toast({
        title: 'Tersalin!',
        description: 'Ringkasan telah disalin ke clipboard.',
      });
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
      toast({
        title: 'Gagal Menyalin',
        description: 'Tidak dapat menyalin teks ke clipboard.',
        variant: 'destructive',
      });
    });
  };

  const downloadAsDocx = () => {
    // Basic conversion from simple HTML to docx paragraphs
    const paragraphs = ringkasan.konten.split(/<br \s*\/?>/gi).map(line => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = line;
        return new Paragraph({
            children: [new TextRun(tempDiv.textContent || tempDiv.innerText || '')],
        });
    });
    
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: ringkasan.judul || 'Hasil Ringkasan',
                bold: true,
                size: 28,
              }),
            ],
            spacing: { after: 200 },
          }),
          ...paragraphs
        ],
      }],
    });

    Packer.toBlob(doc).then(blob => {
      const safeTitle = (ringkasan.judul || 'Ringkasan').replace(/[^a-z0-9]/gi, '_').toLowerCase();
      saveAs(blob, `${safeTitle}.docx`);
    }).catch(err => {
        console.error('Gagal membuat dokumen:', err);
        toast({
            title: 'Gagal Mengunduh',
            description: 'Tidak dapat membuat file .docx.',
            variant: 'destructive',
        });
    });
  };


  return (
    <Card className="shadow-lg h-full">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{ringkasan.judul || 'Hasil Ringkasan'}</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Salin Ringkasan">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={downloadAsDocx} aria-label="Unduh sebagai DOCX">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="summary">
              <FileText className="mr-2 h-4 w-4" />
              Ringkasan Utama
            </TabsTrigger>
            <TabsTrigger value="jargon">
              <BookMarked className="mr-2 h-4 w-4" />
              Penjelasan Jargon ({jargon.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="mt-4 space-y-4 prose prose-sm max-w-none">
             <div dangerouslySetInnerHTML={{ __html: ringkasan.konten.replace(/\n/g, '<br />') }} />
          </TabsContent>

          <TabsContent value="jargon" className="mt-4">
            {jargon.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {jargon.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.istilah}</AccordionTrigger>
                    <AccordionContent>{item.definisi}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-muted-foreground text-center py-8">
                Tidak ada jargon yang terdeteksi.
              </p>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
