import { FC, useState } from 'react';
import { useTranslation } from '@/lib/i18n';
import { Calendar, Clock, User, Phone, MapPin, Sparkles } from 'lucide-react';

const formLabels = {
  hi: {
    heading: 'परामर्श बुक करें',
    subtitle: 'गुरुजी के साथ अपना सत्र निर्धारित करने के लिए नीचे दिए गए फॉर्म को भरें।',
    nameLabel: 'पूरा नाम',
    namePlaceholder: 'अपना पूरा नाम दर्ज करें',
    phoneLabel: 'फ़ोन नंबर',
    phonePlaceholder: 'अपना फ़ोन नंबर दर्ज करें',
    birthPlaceLabel: 'जन्म स्थान / वर्तमान पता',
    birthPlacePlaceholder: 'अपना जन्म स्थान (शहर, राज्य) या पता दर्ज करें',
    dobLabel: 'जन्म तिथि',
    tobLabel: 'जन्म समय',
    serviceLabel: 'सेवा (वैकल्पिक)',
    servicePlaceholder: '-- सेवा चुनें --',
    submitButton: 'व्हाट्सएप पर अपॉइंटमेंट बुक करें',
    whatsappIntro: 'नमस्ते गुरुजी, मैं आपसे परामर्श करना चाहता हूँ। मेरे विवरण इस प्रकार हैं:',
  },
  en: {
    heading: 'Book a Consultation',
    subtitle: 'Fill out the form below to schedule your session with Guruji.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    phoneLabel: 'Phone Number',
    phonePlaceholder: 'Enter your phone number',
    birthPlaceLabel: 'Place of Birth / Current Address',
    birthPlacePlaceholder: 'Enter your birth place (City, State) or address',
    dobLabel: 'Date of Birth',
    tobLabel: 'Time of Birth',
    serviceLabel: 'Service (Optional)',
    servicePlaceholder: '-- Select a Service --',
    submitButton: 'Book Appointment on WhatsApp',
    whatsappIntro: 'Hello Guruji, I want to consult with you. Here are my details:',
  }
};

const servicesList = [
  { id: 'kundli', hi: 'कुंडली विश्लेषण (Birth Chart Analysis)', en: 'Birth Chart Analysis' },
  { id: 'puja', hi: 'पूजा-पाठ (Ritual Worship)', en: 'Ritual Worship' },
  { id: 'graha', hi: 'ग्रह शांति (Planetary Pacification)', en: 'Planetary Pacification' },
  { id: 'katha', hi: 'कथा वाचन (Scripture Recitation)', en: 'Scripture Recitation' },
  { id: 'guidance', hi: 'जीवन मार्गदर्शन (Life Guidance)', en: 'Life Guidance' },
  { id: 'pitru', hi: 'पितृ दोष निवारण (Pitru Dosh Remedies)', en: 'Pitru Dosh Remedies' },
  { id: 'rudra', hi: 'रुद्राभिषेक (Rudrabhishek)', en: 'Rudrabhishek' },
  { id: 'vastu', hi: 'वैदिक उपाय (Vedic Remedies)', en: 'Vedic Remedies' },
];

interface ContactProps {
  selectedService: string;
  onServiceChange: (serviceId: string) => void;
}

export const Contact: FC<ContactProps> = ({ selectedService, onServiceChange }) => {
  const { language } = useTranslation();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [dob, setDob] = useState('');
  const [tob, setTob] = useState('');

  const labels = language === 'hi' ? formLabels.hi : formLabels.en;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Find selected service name
    const selectedServiceObj = servicesList.find(s => s.id === selectedService);
    
    // Always use Hindi title of the service for the Hindi intro line
    const introServiceText = selectedServiceObj ? selectedServiceObj.hi.split(' (')[0] : '';
      
    const introLine = introServiceText
      ? `जय श्री राम पंडित जी, मुझे आपसे ${introServiceText} के बारे में बात करनी है`
      : 'जय श्री राम पंडित जी, मुझे आपसे बात करनी है';

    const serviceName = selectedServiceObj 
      ? (language === 'hi' ? selectedServiceObj.hi : selectedServiceObj.en)
      : (language === 'hi' ? 'चयनित नहीं' : 'Not Selected');

    // Format DOB to dd-mm-yyyy
    const formattedDob = (() => {
      if (!dob) return '';
      const parts = dob.split('-');
      return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : dob;
    })();

    // Format TOB to hh-mm am/pm
    const formattedTob = (() => {
      if (!tob) return '';
      const parts = tob.split(':');
      if (parts.length >= 2) {
        let hours = parseInt(parts[0], 10);
        const minutes = parts[1];
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const hoursStr = hours < 10 ? `0${hours}` : hours.toString();
        return `${hoursStr}-${minutes} ${ampm}`;
      }
      return tob;
    })();

    // Build prefilled message
    const message = `${introLine}

- *${labels.nameLabel}*: ${name}
- *${labels.phoneLabel}*: ${phone}
- *${labels.birthPlaceLabel}*: ${birthPlace}
- *${labels.dobLabel}*: ${formattedDob}
- *${labels.tobLabel}*: ${formattedTob}
- *${labels.serviceLabel}*: ${serviceName}`;

    // Target WhatsApp Number
    const whatsappUrl = `https://wa.me/917988296018?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-transparent to-[#FAF5F0]/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {labels.heading}
            </h2>
            <p className="text-lg text-muted-foreground">
              {labels.subtitle}
            </p>
          </div>

          <div className="bg-card border border-amber-500/10 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name & Phone in 2 Columns on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="fullname" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {labels.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={labels.namePlaceholder}
                    className="w-full bg-background border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-200"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    {labels.phoneLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={labels.phonePlaceholder}
                    className="w-full bg-background border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Place of Birth / Address */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="birthplace" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {labels.birthPlaceLabel} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="birthplace"
                  required
                  rows={3}
                  value={birthPlace}
                  onChange={(e) => setBirthPlace(e.target.value)}
                  placeholder={labels.birthPlacePlaceholder}
                  className="w-full bg-background border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* DOB & TOB in 2 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date of Birth */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="dob" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {labels.dobLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full bg-background border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-200"
                  />
                </div>

                {/* Time of Birth */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="tob" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {labels.tobLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    id="tob"
                    required
                    value={tob}
                    onChange={(e) => setTob(e.target.value)}
                    className="w-full bg-background border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-200"
                  />
                </div>
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="service" className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {labels.serviceLabel}
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => onServiceChange(e.target.value)}
                  className="w-full bg-background border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm text-foreground outline-none transition-all duration-200 cursor-pointer"
                >
                  <option value="">{labels.servicePlaceholder}</option>
                  {servicesList.map((s) => (
                    <option key={s.id} value={s.id}>
                      {language === 'hi' ? s.hi : s.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold rounded-xl py-4 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.489.002 9.961-4.467 9.964-9.948.002-2.654-1.03-5.148-2.908-7.027-1.878-1.878-4.37-2.91-7.024-2.911-5.491 0-9.965 4.469-9.968 9.95-.001 1.513.418 2.997 1.21 4.3l-.979 3.57 3.659-.96c1.32.782 2.68 1.182 4.025 1.182zm11.23-7.971c-.3-.15-1.772-.875-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.511-1.77-4.7-3.578-5.075-4.225-.175-.3-.018-.463.132-.612.134-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.926-2.225-.244-.588-.492-.507-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.975-1.05 3.1-1.05 3.125 0 .025.075.975.7 1.6 1.25 1.25 2.5 1.8 3.825 2.15.9.239 1.775.2 2.424.1.724-.11 1.772-.725 2.022-1.39.25-.664.25-1.23.175-1.39-.08-.15-.28-.225-.58-.375z" />
                </svg>
                {labels.submitButton}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

