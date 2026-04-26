import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, Sparkles, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ onDemoClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', color: 'hover:text-[hsl(var(--primary))]' },
    { name: 'About', href: '#about', color: 'hover:text-[hsl(var(--secondary))]' },
    { name: 'Classes', href: '#classes', color: 'hover:text-[hsl(var(--tertiary))]' },
    { name: 'Subjects', href: '#subjects', color: 'hover:text-[hsl(var(--highlight))]' },
    { name: 'Testimonials', href: '#testimonials', color: 'hover:text-[hsl(var(--primary))]' },
    { name: 'Contact', href: '#contact', color: 'hover:text-[hsl(var(--secondary))]' }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/917753888040?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Bright%20Kids%20Classes', '_blank');
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--highlight))] text-white py-2 px-4 text-center font-bold text-sm tracking-wide shadow-sm relative overflow-hidden">
        <Sparkles className="w-4 h-4 inline mr-2 animate-pulse" />
        Admission open for 2026-27 session! Limited seats available
        <Star className="w-4 h-4 inline ml-2 animate-spin-slow" />
      </div>
      
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-[hsl(var(--sunny))] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] rounded-2xl flex items-center justify-center shadow-playful group-hover:rotate-12 transition-all duration-300">
                <span className="text-2xl">🌟</span>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold text-[hsl(var(--primary))] tracking-tight drop-shadow-sm">
                  Bright Kids
                </h1>
                <p className="text-sm font-semibold text-[hsl(var(--secondary))]">By Mamta Singh</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold text-foreground transition-colors duration-200 ${link.color}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={onDemoClick}
                className="bg-[hsl(var(--tertiary))] text-white hover:brightness-110 font-bold rounded-xl shadow-playful hover:shadow-playful-hover transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Book Free Demo
              </Button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-xl transition-colors"
            >
              {isMenuOpen ? <X className="w-7 h-7 text-[hsl(var(--primary))]" /> : <Menu className="w-7 h-7 text-[hsl(var(--primary))]" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t-2 border-[hsl(var(--muted))] bg-white shadow-xl absolute w-full"
            >
              <nav className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-lg font-bold text-foreground hover:bg-[hsl(var(--primary))/10] rounded-xl transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t-2 border-muted px-4">
                  <Button
                    onClick={() => {
                      onDemoClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[hsl(var(--tertiary))] text-white hover:brightness-110 font-bold rounded-xl py-6 shadow-playful"
                  >
                    Book Free Demo
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917753888040?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Bright%20Kids%20Classes"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-24 right-4 sm:top-28 sm:right-6 z-50 bg-[hsl(var(--whatsapp))] text-white p-3 sm:p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-2 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
          Chat with us!
        </span>
      </a>
    </>
  );
};

export default Header;