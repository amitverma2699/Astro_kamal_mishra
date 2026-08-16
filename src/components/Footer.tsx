import { FC } from 'react';
import { Instagram, Facebook, Youtube, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
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
    <footer className="bg-[#1f1712] text-background/80 py-16 border-t border-amber-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-background/10 pb-16 mb-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col space-y-4">
            <span className="font-serif text-2xl font-bold tracking-wide text-primary-foreground">
              आचार्य कमल नयन मिश्रा
            </span>
            <p className="text-sm leading-relaxed max-w-sm text-background/70">
              {t.footerDesc}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-background/5 border border-background/10 text-background/60 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Visit Location */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-bold text-primary-foreground flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              {t.contactLocationLabel}
            </h4>
            <address className="not-italic text-sm leading-relaxed text-background/70 whitespace-pre-line">
              {t.contactAddress}
            </address>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-bold text-primary-foreground flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              {t.contactInfoTitle}
            </h4>
            <div className="space-y-3 text-sm">
              <a href={PHONE_URL} className="flex flex-col hover:text-white transition-colors text-background/70">
                <span className="font-medium text-xs text-background/50">{t.contactCallLabel}:</span>
                <span className="font-semibold text-base mt-0.5">+91 7988296018</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col hover:text-white transition-colors text-background/70">
                <span className="font-medium text-xs text-background/50">{t.contactWALabel}:</span>
                <span className="font-semibold text-base mt-0.5">+91 7988296018</span>
              </a>
            </div>
          </div>

          {/* Column 4: Visiting Hours */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-lg font-bold text-primary-foreground flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              {t.contactHoursTitle}
            </h4>
            <div className="space-y-4 text-xs text-background/70">
              <div>
                <p className="font-semibold text-sm text-background/90">{t.contactMorning}</p>
                <p className="font-serif text-sm text-primary mt-0.5">{t.contactMorningHours}</p>
                <p className="text-[11px] opacity-80 mt-0.5">{t.contactMorningNote}</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-background/90">{t.contactEvening}</p>
                <p className="font-serif text-sm text-primary mt-0.5">{t.contactEveningHours}</p>
                <p className="text-[11px] opacity-80 mt-0.5">{t.contactEveningNote}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center text-background/40 text-xs">
          <p>&copy; {currentYear} Acharya Kamal Nayan Mishra. {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

