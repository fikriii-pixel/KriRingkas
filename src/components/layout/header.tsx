'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BrainCircuit, Sparkles, Zap, Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';



const resourcesItems = [
  { name: 'Tips Akademik', href: '/blog', description: 'Strategi belajar efektif' },
  { name: 'Panduan', href: '/docs', description: 'Cara penggunaan optimal' },
  { name: 'Komunitas', href: '/community', description: 'Diskusi dengan mahasiswa' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' 
          : 'bg-gradient-to-b from-white via-white/95 to-transparent border-b border-gray-200/30'
      }`}>
        <div className="container relative">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center space-x-3 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <BrainCircuit className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Zap className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    KriRingkas.ID
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    AI Academic Assistant
                  </span>
                </div>
              </Link>
            </div>
            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              {pathname !== '/app' && (
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  asChild
                >
                  <Link href="/app" className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Coba Gratis
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <Link 
                    href="/" 
                    className="flex items-center space-x-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <BrainCircuit className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg text-gray-900">
                        KriRingkas.ID
                      </span>
                      <span className="text-xs text-gray-500">
                        AI Academic Assistant
                      </span>
                    </div>
                  </Link>
                </div>
              </div>


              {/* Footer - Hanya CTA Button */}
              <div className="p-6 border-t border-gray-200">
                {pathname !== '/app' && (
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    asChild
                  >
                    <Link 
                      href="/app"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Coba Gratis Sekarang
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left transform scale-x-0 transition-transform duration-300"
        style={{
          transform: `scaleX(${typeof window !== 'undefined' ? Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1) : 0})`
        }}
      />
    </>
  );
} 