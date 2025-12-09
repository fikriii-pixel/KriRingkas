import Link from 'next/link';
import { BrainCircuit, Mail, Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <BrainCircuit className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold">KriRingkas.ID</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Perangkum Jurnal AI untuk Mahasiswa Indonesia. Mempercepat pemahaman literatur akademik dengan teknologi Gemini AI.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Tautan</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary">Fitur</Link></li>
              <li><Link href="#pricing" className="hover:text-primary">Harga</Link></li>
              <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="/app" className="hover:text-primary">Coba Sekarang</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} KriRingkas.ID. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Email" className="text-muted-foreground hover:text-primary"><Mail className="w-5 h-5" /></Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
