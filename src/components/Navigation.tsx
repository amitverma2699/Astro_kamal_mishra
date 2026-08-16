import { FC, useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL, PHONE_URL } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

export const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: '#home' },
    { name: t.navAbout, href: '#about' },
    { name: t.navServices, href: '#services' },
    { name: t.navContact, href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex flex-col min-w-0"
          >
            <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-wide leading-tight">
              आचार्य कमल नयन मिश्रा
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-medium">
              श्री गणेश मंदिर, रोहतक
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <div className="flex space-x-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-xs opacity-60">{language === 'HI' ? 'EN'}</span>
              {t.langToggle}
            </button>

            {/* Call button */}
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-base font-semibold text-foreground shadow-sm hover:bg-muted transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Phone className="h-4 w-4 text-primary flex-shrink-0" />
              +91 7988296018
            </a>

            {/* WhatsApp / Book button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              {t.navBook}
            </a>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              {t.langToggle}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t shadow-lg animate-in slide-in-from-top-4">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-base font-medium text-foreground/80 p-2 hover:bg-muted rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PHONE_URL}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-foreground w-full"
            >
              <Phone className="h-5 w-5 text-primary" />
              +91 7988296018
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm w-full"
            >
              <MessageCircle className="h-5 w-5" />
              {t.navBook}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
