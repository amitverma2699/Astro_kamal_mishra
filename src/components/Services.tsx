import { FC } from 'react';
import { BookOpen, Sparkles, Sun, Moon, Wind, HeartHandshake, Home, Flame } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

const services = [
  {
    id: 'kundli',
    titleHi: 'कुंडली विश्लेषण',
    titleEn: 'Birth Chart Analysis',
    subtitleHi: 'जन्म कुंडली पठन',
    subtitleEn: 'Kundli Reading',
    descHi: 'जन्म कुंडली का विस्तृत अध्ययन — जीवन के पैटर्न, करियर संभावनाएं, विवाह अनुकूलता और भविष्य की ग्रह स्थितियों का प्रभाव।',
    descEn: 'Detailed reading of your natal chart to understand life patterns, career prospects, marriage compatibility, and future transit impacts.',
    icon: Sun,
    message: 'नमस्ते गुरुजी, मुझे कुंडली विश्लेषण के लिए समय चाहिए।',
  },
  {
    id: 'puja',
    titleHi: 'पूजा-पाठ',
    titleEn: 'Ritual Worship',
    subtitleHi: 'वैदिक अनुष्ठान',
    subtitleEn: 'Vedic Rituals',
    descHi: 'शास्त्रीय दिशा-निर्देशों के अनुसार शुभ अवसरों, शांति और समृद्धि के लिए प्रामाणिक वैदिक अनुष्ठान।',
    descEn: 'Authentic Vedic rituals performed with strict adherence to scriptural guidelines for auspicious occasions, peace, and prosperity.',
    icon: Flame,
    message: 'नमस्ते गुरुजी, मुझे पूजा-पाठ के विषय में जानकारी चाहिए।',
  },
  {
    id: 'graha',
    titleHi: 'ग्रह शांति',
    titleEn: 'Planetary Pacification',
    subtitleHi: 'नवग्रह शांति',
    subtitleEn: 'Navagraha Shanti',
    descHi: 'जीवन में बाधाएं उत्पन्न करने वाले पाप ग्रहों के प्रभाव को शांत करने के लिए विशेष उपाय और हवन।',
    descEn: 'Specialized remedies and havans to pacify malefic planetary influences (Navagraha Shanti) causing hurdles in life.',
    icon: Moon,
    message: 'नमस्ते गुरुजी, मुझे ग्रह शांति अनुष्ठान के लिए परामर्श चाहिए।',
  },
  {
    id: 'katha',
    titleHi: 'कथा वाचन',
    titleEn: 'Scripture Recitation',
    subtitleHi: 'पवित्र ग्रंथ पठन',
    subtitleEn: 'Sacred Text Reading',
    descHi: 'सत्यनारायण कथा, भागवत कथा और सुंदरकांड जैसे पवित्र ग्रंथों का भावपूर्ण पठन और व्याख्या।',
    descEn: 'Soulful recitation and explanation of sacred texts like Satyanarayan Katha, Bhagwat Katha, and Sundarkand.',
    icon: BookOpen,
    message: 'नमस्ते गुरुजी, मुझे कथा वाचन के लिए संपर्क करना है।',
  },
  {
    id: 'guidance',
    titleHi: 'जीवन मार्गदर्शन',
    titleEn: 'Life Guidance',
    subtitleHi: 'आध्यात्मिक परामर्श',
    subtitleEn: 'Spiritual Counseling',
    descHi: 'चिंता, पारिवारिक विवाद, व्यापार में हानि या व्यक्तिगत दुविधाओं के लिए ज्योतिषीय अंतर्दृष्टि पर आधारित दयालु परामर्श।',
    descEn: 'Compassionate counseling based on astrological insights for anxiety, family disputes, business losses, or personal dilemmas.',
    icon: HeartHandshake,
    message: 'नमस्ते गुरुजी, मुझे जीवन की कुछ समस्याओं के लिए मार्गदर्शन चाहिए।',
  },
  {
    id: 'pitru',
    titleHi: 'पितृ दोष निवारण',
    titleEn: 'Pitru Dosh Remedies',
    subtitleHi: 'पैतृक कर्म शुद्धि',
    subtitleEn: 'Ancestral Karma Remedy',
    descHi: 'पारिवारिक विकास और सुख में बाधा डालने वाले पैतृक कर्मिक ऋणों को दूर करने के लिए विशिष्ट अनुष्ठान और मार्गदर्शन।',
    descEn: 'Specific rituals and guidance to clear ancestral karmic debts bringing obstacles in family growth and happiness.',
    icon: Wind,
    message: 'नमस्ते गुरुजी, मुझे पितृ दोष निवारण के बारे में जानना है।',
  },
  {
    id: 'rudra',
    titleHi: 'रुद्राभिषेक',
    titleEn: 'Rudrabhishek',
    subtitleHi: 'शिव अभिषेक पूजन',
    subtitleEn: 'Shiv Abhishek Puja',
    descHi: 'नकारात्मक ऊर्जाओं को दूर करने, रोगों को ठीक करने और परम आध्यात्मिक व भौतिक कल्याण लाने के लिए भगवान शिव की शक्तिशाली उपासना।',
    descEn: 'Powerful worship of Lord Shiva to remove negative energies, cure ailments, and bring ultimate spiritual and material well-being.',
    icon: Sparkles,
    message: 'नमस्ते गुरुजी, मुझे रुद्राभिषेक के लिए समय चाहिए।',
  },
  {
    id: 'vastu',
    titleHi: 'वैदिक उपाय',
    titleEn: 'Vedic Remedies',
    subtitleHi: 'सरल वैदिक समाधान',
    subtitleEn: 'Simple Vedic Solutions',
    descHi: 'मंत्र जाप, रत्न परामर्श और दैनिक आध्यात्मिक अभ्यास सहित सरल, प्रभावी और पारंपरिक उपाय।',
    descEn: 'Simple, effective, and traditional remedies including mantra chanting, gemstone consultation, and daily spiritual practices.',
    icon: Home,
    message: 'नमस्ते गुरुजी, मुझे वैदिक उपायों के लिए परामर्श चाहिए।',
  },
];

export const Services: FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            {t.servicesHeading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                {language === 'hi' ? service.titleHi : service.titleEn}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {language === 'hi' ? service.subtitleHi : service.subtitleEn}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {language === 'hi' ? service.descHi : service.descEn}
              </p>

              <a
                href={getWhatsAppUrl(service.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 w-full rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {t.servicesBook}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
