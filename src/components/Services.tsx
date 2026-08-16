import { FC } from 'react';
import { getWhatsAppUrl } from '@/lib/constants';
import { useTranslation } from '@/lib/i18n';

// Import service images (Vedic Gold Badges)
import kundliImg from '@/assets/service_kundli.jpg';
import pujaImg from '@/assets/service_puja.jpg';
import grahaImg from '@/assets/service_graha.jpg';
import kathaImg from '@/assets/service_katha.jpg';
import guidanceImg from '@/assets/service_guidance.jpg';
import pitruImg from '@/assets/service_pitru.svg';
import rudraImg from '@/assets/service_rudra.svg';
import vastuImg from '@/assets/service_vastu.svg';

const services = [
  {
    id: 'kundli',
    titleHi: 'कुंडली विश्लेषण',
    titleEn: 'Birth Chart Analysis',
    subtitleHi: 'जन्म कुंडली पठन',
    subtitleEn: 'Kundli Reading',
    descHi: 'जन्म कुंडली का विस्तृत अध्ययन — जीवन के पैटर्न, करियर संभावनाएं, विवाह अनुकूलता और भविष्य की ग्रह स्थितियों का प्रभाव।',
    descEn: 'Detailed reading of your natal chart to understand life patterns, career prospects, marriage compatibility, and future transit impacts.',
    image: kundliImg,
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
    image: pujaImg,
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
    image: grahaImg,
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
    image: kathaImg,
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
    image: guidanceImg,
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
    image: pitruImg,
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
    image: rudraImg,
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
    image: vastuImg,
    message: 'नमस्ते गुरुजी, मुझे वैदिक उपायों के लिए परामर्श चाहिए।',
  },
];


interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: FC<ServicesProps> = ({ onSelectService }) => {
  const { t, language } = useTranslation();

  const handleChoose = (e: React.MouseEvent, serviceId: string) => {
    e.preventDefault();
    onSelectService(serviceId);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const y = contactElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
              className="relative bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col h-full overflow-hidden"
            >
              {/* Service Badges on top-right */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full overflow-hidden border border-amber-500/20 shadow-md hover:scale-110 transition-transform duration-300">
                <img
                  src={service.image}
                  alt={language === 'hi' ? service.titleHi : service.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-serif font-bold text-foreground mb-1 pr-16 mt-2">
                {language === 'hi' ? service.titleHi : service.titleEn}
              </h3>
              <p className="text-sm font-medium text-primary mb-3 pr-16">
                {language === 'hi' ? service.subtitleHi : service.subtitleEn}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-6">
                {language === 'hi' ? service.descHi : service.descEn}
              </p>

              <a
                href="#contact"
                onClick={(e) => handleChoose(e, service.id)}
                className="mt-auto inline-flex items-center justify-center gap-2 w-full rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer"
              >
                {language === 'hi' ? 'चुनें' : 'Choose'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
