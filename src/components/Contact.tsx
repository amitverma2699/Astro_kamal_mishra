import { FC } from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

export const Contact: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {t.contactHeading}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="bg-card border rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary text-primary-foreground">
                <h3 className="text-2xl font-serif font-bold mb-6">{t.contactInfoTitle}</h3>

                <div className="space-y-8">
                  <a href={PHONE_URL} className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <Phone className="w-6 h-6 mt-1 opacity-80 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm opacity-80 mb-1">{t.contactCallLabel}</p>
                      <p className="text-xl font-semibold">+91 7988296018</p>
                    </div>
                  </a>

                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <MessageCircle className="w-6 h-6 mt-1 opacity-80 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm opacity-80 mb-1">{t.contactWALabel}</p>
                      <p className="text-xl font-semibold">+91 7988296018</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1 opacity-80 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm opacity-80 mb-1">{t.contactLocationLabel}</p>
                      <p className="text-lg leading-snug whitespace-pre-line">
                        {t.contactAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center bg-muted/10">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-serif font-bold text-foreground">{t.contactHoursTitle}</h3>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-card border rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {t.contactMorning}
                    </h4>
                    <p className="text-2xl font-serif text-muted-foreground">{t.contactMorningHours}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t.contactMorningNote}</p>
                  </div>

                  <div className="p-6 bg-card border rounded-2xl shadow-sm">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      {t.contactEvening}
                    </h4>
                    <p className="text-2xl font-serif text-muted-foreground">{t.contactEveningHours}</p>
                    <p className="text-sm text-muted-foreground mt-2">{t.contactEveningNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
