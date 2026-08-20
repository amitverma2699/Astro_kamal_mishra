import { FC } from 'react';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';
import acharyaHero from '@/assets/acharya-portrait.jpg';

export const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background soft decoration */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide">{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              {t.heroTitle1}<br/>
              <span className="text-primary">{t.heroTitle2}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[#20bd5a] transition-all hover:-tra[...]
              >
                <MessageCircle className="h-5 w-5" />
                {t.heroWhatsApp}
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-border px-8 py-3.5 text-base font-semibold text-foreground shadow-sm hover:bg-muted transit[...]
              >
                <Phone className="h-5 w-5" />
                {t.heroCall}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full max-w-lg bg-card border shadow-sm rounded-2xl p-5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-5[...]
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{t.heroTimingsLabel}</h3>
                  <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line">
                    {t.heroTimings}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{t.heroLocationLabel}</h3>
                  <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line">
                    {t.heroLocation}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 blur-sm"></div>
              <img
                src={acharyaHero}
                alt="Acharya Kamal Nayan Mishra"
                className="relative w-72 sm:w-80 lg:w-96 aspect-[4/5] object-cover object-top rounded-3xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-5 py-3 shadow-lg">
                <span className="font-serif text-2xl font-bold block leading-none">15+</span>
                <span className="text-xs font-medium opacity-90">{t.aboutYearsLabel}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
