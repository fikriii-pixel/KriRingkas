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
import { BookMarked, FileText } from 'lucide-react';

interface ResultsDisplayProps {
  result: GenerateStructuredAcademicSummaryOutput;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { ringkasan, jargon } = result;

  return (
    <Card className="shadow-lg h-full">
      <CardHeader>
        <CardTitle>{ringkasan.judul || 'Hasil Ringkasan'}</CardTitle>
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
