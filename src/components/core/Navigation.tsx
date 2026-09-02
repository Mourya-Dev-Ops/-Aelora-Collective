"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Worlds', href: '/worlds' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 flex items-center justify-between p-6 md:p-8 lg:px-12 transition-all duration-300',
          scrolled ? 'bg-aelora-bg/80 backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <Link href="/" data-cursor="enter" className="font-display uppercase tracking-[0.1em] text-aelora-accent text-xl">
          AELORA
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-cursor="enter"
              className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-aelora-text-muted hover:text-aelora-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          data-cursor="enter"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[1px] bg-aelora-accent transition-transform duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <span className="w-6 h-[1px] bg-aelora-accent transition-opacity duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="w-6 h-[1px] bg-aelora-accent transition-transform duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-aelora-bg flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    data-cursor="enter"
                    className="font-display text-4xl uppercase tracking-widest text-aelora-text hover:text-aelora-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
