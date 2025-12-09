import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export default function InitialState() {
  return (
    <Card className="h-full flex items-center justify-center bg-secondary/50 border-dashed">
      <CardContent className="text-center text-muted-foreground pt-6">
        <BrainCircuit className="mx-auto h-12 w-12 mb-4" />
        <h3 className="text-lg font-semibold text-foreground">
          Hasil Ringkasan Akan Muncul di Sini
        </h3>
        <p>
          Masukkan teks jurnal di samping dan klik "Ringkas Sekarang" untuk
          melihat keajaiban AI.
        </p>
      </CardContent>
    </Card>
  );
}
