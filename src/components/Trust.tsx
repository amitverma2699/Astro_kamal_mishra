import { FC } from 'react';
import { ShieldCheck, UserCheck, Leaf } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export const Trust: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-5 text-primary">
                <UserCheck className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{t.trustP1Title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.trustP1Desc}</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-5 text-primary">
                <Leaf className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{t.trustP2Title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.trustP2Desc}</p>
            </div>

            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-5 text-primary">
                <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{t.trustP3Title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.trustP3Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
