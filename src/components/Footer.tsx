import { FC } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

const socialLinks = [
  { Icon: Instagram, href: 'https://www.instagram.com/acharyakamalmishra/', label: 'Instagram' },
  { Icon: Facebook, href: 'https://www.facebook.com/AcharyaKamalMishra', label: 'Facebook' },
  { Icon: Youtube, href: 'https://www.youtube.com/@KAMALMishra-v2z', label: 'YouTube' },
];

export const Footer: FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 border-b border-background/10 pb-12 mb-8">
          <div>
            <span className="font-serif text-2xl font-bold tracking-wide mb-4 block text-primary-foreground">
              आचार्य कमल नयन मिश्रा
            </span>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm mb-6">
              {t.footerDesc}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 border border-background/20 text-background/70 hover:text-white hover:bg-primary hover:border-primary transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footerLocation}</h4>
            <address className="not-italic text-background/70 text-sm leading-relaxed whitespace-pre-line">
              {t.footerAddress}
            </address>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footerContact}</h4>
            <div className="space-y-3 text-sm text-background/70">
              <a href={PHONE_URL} className="block hover:text-white transition-colors">
                +91 7988296018
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                WhatsApp Chat
              </a>
              <p className="pt-2 text-xs">{t.footerAvailable}</p>
            </div>
          </div>
        </div>

        <div className="text-center text-background/50 text-xs">
          <p>&copy; {currentYear} Acharya Kamal Nayan Mishra. {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};
