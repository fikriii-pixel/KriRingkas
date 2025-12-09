import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold">KriRingkas.ID</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms & Conditions</Link>
            <Link href="#" className="hover:text-primary">Contact Us</Link>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} KriRingkas.ID – 2025.
          </p>
        </div>
      </div>
    </footer>
  );
}
