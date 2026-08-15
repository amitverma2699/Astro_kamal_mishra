export type Language = 'hi' | 'en';

export interface Translations {
  // Navigation
  navHome: string;
  navAbout: string;
  navServices: string;
  navContact: string;
  navBook: string;
  navCall: string;
  langToggle: string;

  // Hero
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  heroWhatsApp: string;
  heroCall: string;
  heroTimingsLabel: string;
  heroTimings: string;
  heroLocationLabel: string;
  heroLocation: string;

  // About
  aboutHeading1: string;
  aboutHeading2: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  aboutYearsLabel: string;
  aboutAuthLabel: string;

  // Services
  servicesHeading: string;
  servicesSubtitle: string;
  servicesBook: string;

  // Trust
  trustP1Title: string;
  trustP1Desc: string;
  trustP2Title: string;
  trustP2Desc: string;
  trustP3Title: string;
  trustP3Desc: string;

  // Contact
  contactHeading: string;
  contactSubtitle: string;
  contactInfoTitle: string;
  contactCallLabel: string;
  contactWALabel: string;
  contactLocationLabel: string;
  contactAddress: string;
  contactHoursTitle: string;
  contactMorning: string;
  contactMorningHours: string;
  contactMorningNote: string;
  contactEvening: string;
  contactEveningHours: string;
  contactEveningNote: string;

  // Footer
  footerDesc: string;
  footerLocation: string;
  footerAddress: string;
  footerContact: string;
  footerAvailable: string;
  footerRights: string;
}

const hi: Translations = {
  // Navigation
  navHome: 'होम',
  navAbout: 'परिचय',
  navServices: 'सेवाएँ',
  navContact: 'संपर्क',
  navBook: 'परामर्श बुक करें',
  navCall: 'कॉल करें',
  langToggle: 'EN',

  // Hero
  heroBadge: 'वैदिक ज्योतिष एवं कर्मकांड',
  heroTitle1: 'ज्योतिष आचार्य',
  heroTitle2: 'कमल नयन मिश्रा',
  heroSubtitle: 'प्राचीन वैदिक ज्ञान से जीवन में स्पष्टता, शांति और सही दिशा पाएँ। श्री गणेश मंदिर, रोहतक में विश्वसनीय परामर्श।',
  heroWhatsApp: 'व्हाट्सएप परामर्श',
  heroCall: 'कॉल करें +91 7988296018',
  heroTimingsLabel: 'परामर्श समय',
  heroTimings: 'प्रातः: 8:00 – 12:00 बजे\nसायं: 4:00 – 7:30 बजे',
  heroLocationLabel: 'पता',
  heroLocation: 'श्री गणेश मंदिर\nवैश कॉलेज, रेलवे स्टेशन के पास\nरोहतक – 124001',

  // About
  aboutHeading1: 'परंपरागत वैदिक ज्ञान,',
  aboutHeading2: 'आधुनिक जीवन का मार्गदर्शन',
  aboutP1: 'आचार्य कमल नयन मिश्रा एक अत्यंत सम्माननीय वैदिक ज्योतिषी और आध्यात्मिक मार्गदर्शक हैं, जो श्री गणेश मंदिर, रोहतक में स्थित हैं। भारतीय परंपराओं में गहरी जड़ें रखते हुए, उन्होंने अपना जीवन ज्योतिष शास्त्र और कर्मकांड के अध्ययन और अभ्यास को समर्पित किया है।',
  aboutP2: 'शीघ्र समाधान देने की बजाय, गुरुजी आपकी कुंडली (जन्म कुंडली) का सूक्ष्म विश्लेषण कर जीवन मार्ग की गहरी अंतर्दृष्टि प्रदान करते हैं। करियर, रिश्ते, स्वास्थ्य और आध्यात्मिक विकास में चुनौतियों का सामना करने वाले लोग उनका मार्गदर्शन लेते हैं।',
  aboutP3: 'प्रत्येक परामर्श पूर्णतः गोपनीय, अत्यंत सहानुभूतिपूर्ण और व्यावहारिक वैदिक उपायों पर केंद्रित होता है जो स्थायी शांति और समृद्धि लाते हैं।',
  aboutYearsLabel: 'वर्षों का अनुभव',
  aboutAuthLabel: 'वैदिक प्रामाणिकता',

  // Services
  servicesHeading: 'ज्योतिष एवं आध्यात्मिक सेवाएँ',
  servicesSubtitle: 'जीवन की चुनौतियों को कृपा और दैवीय आशीर्वाद से पार करने के लिए प्रामाणिक वैदिक परामर्श और अनुष्ठान।',
  servicesBook: 'व्हाट्सएप पर बुक करें',

  // Trust
  trustP1Title: 'व्यक्तिगत परामर्श',
  trustP1Desc: 'आपकी अनूठी स्थिति और जन्म कुंडली की बारीकियों को गहराई से समझने के लिए एकल, अविभाजित ध्यान।',
  trustP2Title: 'पारंपरिक पद्धति',
  trustP2Desc: 'शास्त्रीय वैदिक सिद्धांतों का कड़ाई से पालन। कोई भय नहीं, केवल सच्चा शास्त्रीय मार्गदर्शन।',
  trustP3Title: 'पूर्ण गोपनीयता',
  trustP3Desc: 'आपकी गोपनीयता पवित्र है। सभी परामर्श और व्यक्तिगत विवरण पूर्णतः गोपनीय रखे जाते हैं।',

  // Contact
  contactHeading: 'संपर्क करें',
  contactSubtitle: 'परामर्श या अनुष्ठान के लिए अपॉइंटमेंट लें।',
  contactInfoTitle: 'संपर्क जानकारी',
  contactCallLabel: 'अपॉइंटमेंट के लिए कॉल करें',
  contactWALabel: 'व्हाट्सएप पर संदेश भेजें',
  contactLocationLabel: 'स्थान पर आएँ',
  contactAddress: 'श्री गणेश मंदिर\nवैश कॉलेज, रेलवे स्टेशन के पास\nरोहतक – 124001',
  contactHoursTitle: 'मिलने का समय',
  contactMorning: 'प्रातःकाल',
  contactMorningHours: 'प्रातः 8:00 – दोपहर 12:00',
  contactMorningNote: 'प्रातःकालीन पूजा और शीघ्र परामर्श के लिए।',
  contactEvening: 'सायंकाल',
  contactEveningHours: 'सायं 4:00 – 7:30 बजे',
  contactEveningNote: 'विस्तृत कुंडली विश्लेषण और उपायों के लिए।',

  // Footer
  footerDesc: 'प्रामाणिक वैदिक ज्योतिष परामर्श, जीवन मार्गदर्शन और पारंपरिक अनुष्ठानों का संचालन पूर्ण समर्पण और शास्त्रीय यथार्थता के साथ।',
  footerLocation: 'पता',
  footerAddress: 'श्री गणेश मंदिर\nवैश कॉलेज, रेलवे स्टेशन के पास\nरोहतक – 124001, हरियाणा',
  footerContact: 'त्वरित संपर्क',
  footerAvailable: 'उपलब्ध: प्रातः 8 – दोपहर 12 एवं सायं 4 – 7:30',
  footerRights: 'सर्वाधिकार सुरक्षित।',
};

const en: Translations = {
  // Navigation
  navHome: 'Home',
  navAbout: 'About',
  navServices: 'Services',
  navContact: 'Contact',
  navBook: 'Book Consultation',
  navCall: 'Call Now',
  langToggle: 'हिं',

  // Hero
  heroBadge: 'Vedic Astrology & Karmakand',
  heroTitle1: 'Jyotish Acharya',
  heroTitle2: 'Kamal Nayan Mishra',
  heroSubtitle: 'Guided by ancient Vedic wisdom to bring clarity, peace, and direction to your life\'s journey. Trusted consultations at Shri Ganesh Mandir, Rohtak.',
  heroWhatsApp: 'WhatsApp Consultation',
  heroCall: 'Call +91 7988296018',
  heroTimingsLabel: 'Consultation Timings',
  heroTimings: 'Morning: 8:00 AM – 12:00 PM\nEvening: 4:00 PM – 7:30 PM',
  heroLocationLabel: 'Location',
  heroLocation: 'Shri Ganesh Mandir\nVaish College, Near Rly Station\nRohtak – 124001',

  // About
  aboutHeading1: 'Ancient Vedic Wisdom,',
  aboutHeading2: 'Guiding Modern Life',
  aboutP1: 'Acharya Kamal Nayan Mishra is a highly respected Vedic astrologer and spiritual guide based at Shri Ganesh Mandir, Rohtak. With deep roots in ancient Indian traditions, he has dedicated his life to the study and practice of Jyotish Shastra (Vedic Astrology) and Karmakand (Vedic Rituals).',
  aboutP2: 'Rather than offering quick fixes, Guruji provides profound insights into your life\'s path by meticulously analyzing your Kundli (birth chart). His guidance is sought by individuals facing challenges in career, relationships, health, and spiritual growth.',
  aboutP3: 'Every consultation is strictly confidential, deeply empathetic, and focused on practical, traditional remedies (Vaidik Upay) that bring lasting peace and prosperity.',
  aboutYearsLabel: 'Years of Experience',
  aboutAuthLabel: 'Vedic Authenticity',

  // Services
  servicesHeading: 'Jyotish & Spiritual Services',
  servicesSubtitle: 'Authentic Vedic consultations and rituals to help you navigate life\'s challenges with grace and divine blessings.',
  servicesBook: 'Book on WhatsApp',

  // Trust
  trustP1Title: 'Personal Consultation',
  trustP1Desc: 'One-on-one undivided attention to deeply understand your unique situation and birth chart nuances.',
  trustP2Title: 'Traditional Methods',
  trustP2Desc: 'Strict adherence to classical Vedic principles. No fear-mongering, only genuine scriptural guidance.',
  trustP3Title: 'Complete Confidentiality',
  trustP3Desc: 'Your privacy is sacred. All consultations and personal details are kept strictly confidential.',

  // Contact
  contactHeading: 'Contact Us',
  contactSubtitle: 'Reach out to schedule a consultation or ritual.',
  contactInfoTitle: 'Contact Information',
  contactCallLabel: 'Call for Appointment',
  contactWALabel: 'Message on WhatsApp',
  contactLocationLabel: 'Visit Location',
  contactAddress: 'Shri Ganesh Mandir\nVaish College, Near Railway Station\nRohtak – 124001',
  contactHoursTitle: 'Visiting Hours',
  contactMorning: 'Morning Session',
  contactMorningHours: '8:00 AM – 12:00 PM',
  contactMorningNote: 'Perfect for morning rituals and early consultations.',
  contactEvening: 'Evening Session',
  contactEveningHours: '4:00 PM – 7:30 PM',
  contactEveningNote: 'Available for detailed chart analysis and remedies.',

  // Footer
  footerDesc: 'Providing authentic Vedic astrology consultations, life guidance, and performing traditional rituals with complete devotion and scriptural accuracy.',
  footerLocation: 'Location',
  footerAddress: 'Shri Ganesh Mandir\nVaish College, Near Railway Station\nRohtak – 124001, Haryana',
  footerContact: 'Quick Contact',
  footerAvailable: 'Available: 8 AM – 12 PM & 4 PM – 7:30 PM',
  footerRights: 'All rights reserved.',
};

export const translations: Record<Language, Translations> = { hi, en };
