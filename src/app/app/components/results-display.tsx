import type { GenerateStructuredAcademicSummaryOutput } from '@/ai/flows/generate-structured-academic-summary';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
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
import { BookMarked, CheckCircle, FileText } from 'lucide-react';

interface ResultsDisplayProps {
  result: GenerateStructuredAcademicSummaryOutput;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const { ringkasan, jargon } = result;

  return (
    <Card className="shadow-lg h-full">
      <CardHeader>
        <CardTitle>Hasil Ringkasan</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="summary">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="summary">
              <FileText className="mr-2 h-4 w-4" />
              Ringkasan
            </TabsTrigger>
            <TabsTrigger value="jargon">
              <BookMarked className="mr-2 h-4 w-4" />
              Jargon ({jargon.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="mt-4 space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              {ringkasan.judul}
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="font-medium">Metode:</strong>{' '}
                {ringkasan.metode}
              </p>
              <p>
                <strong className="font-medium">Hasil:</strong> {ringkasan.hasil}
              </p>
              <p>
                <strong className="font-medium">Kesimpulan:</strong>{' '}
                {ringkasan.kesimpulan}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Poin-Poin Penting:</h4>
              <ul className="space-y-2">
                {ringkasan.poin.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-1 text-green-500 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
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
