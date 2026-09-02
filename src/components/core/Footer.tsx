import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Worlds', href: '/worlds' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="border-t border-aelora-accent/10 py-20 md:py-32 px-6 md:px-12 bg-aelora-bg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
        {/* Left */}
        <div className="flex flex-col items-start gap-2">
          <Link href="/" className="font-display text-2xl uppercase tracking-[0.1em] text-aelora-accent">
            AELORA
          </Link>
          <span className="text-aelora-text-muted text-xs tracking-wider">
            The Art of Gathering
          </span>
        </div>

        {/* Center */}
        <div className="flex flex-col items-start md:items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] tracking-[0.25em] uppercase text-aelora-text-muted hover:text-aelora-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end justify-between gap-4">
          <Link 
            href="/contact"
            className="text-[10px] tracking-[0.25em] uppercase text-aelora-text-muted hover:text-aelora-accent transition-colors duration-300"
          >
            Start a Conversation
          </Link>
          <span className="text-[10px] tracking-[0.25em] uppercase text-aelora-text-muted md:mt-auto">
            © 2026 Aelora Collective
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-aelora-accent/10 pt-8 flex items-center justify-center">
        <span className="text-[8px] tracking-[0.3em] uppercase text-aelora-text-muted/50">
          All Rights Reserved. Terms & Privacy.
        </span>
      </div>
    </footer>
  );
}
