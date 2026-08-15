import { FC } from 'react';
import { useTranslation } from '@/lib/i18n';
import acharyaPortrait from '@/assets/acharya-portrait.jpg';

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
              <div className="relative">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-primary/5 blur-sm"></div>
                <img
                  src={acharyaPortrait}
                  alt="Acharya Kamal Nayan Mishra"
                  className="relative w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-xl border-4 border-white"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full -z-10 blur-2xl opacity-60"></div>
            </div>

            <div className="md:col-span-7">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                {t.aboutHeading1}<br/>{t.aboutHeading2}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>
              </div>

              <div className="mt-8 pt-8 border-t grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-serif text-3xl text-primary font-bold mb-1">15+</h4>
                  <p className="text-sm text-foreground font-medium">{t.aboutYearsLabel}</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl text-primary font-bold mb-1">100%</h4>
                  <p className="text-sm text-foreground font-medium">{t.aboutAuthLabel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
