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
  aboutP4: string;
  aboutP5: string;
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
  aboutHeading2: 'शास्त्रीय शिक्षा और 15+ वर्षों का अनुभव',
  aboutP1: 'आचार्य कमल नयन मिश्रा एक प्रतिष्ठित वैदिक ज्योतिषी, कर्मकांड विशेषज्ञ एवं आध्यात्मिक मार्गदर्शक हैं, जो श्री गणेश मंदिर, रोहतक में अपनी सेवाएँ प्रदान करते हैं। 15+ वर्षों के अनुभव के साथ उन्होंने वैदिक ज्योतिष, कर्मकांड एवं सनातन परंपराओं के अध्ययन और अभ्यास में व्यापक अनुभव प्राप्त किया है।',
  aboutP2: 'उन्होंने सम्पूर्णानन्द संस्कृत विश्वविद्यालय, वाराणसी से अपनी शास्त्रीय एवं संस्कृत शिक्षा प्राप्त की है, जिसने उन्हें भारतीय ज्ञान परंपरा, ज्योतिष शास्त्र एवं वैदिक कर्मकांड की मजबूत शैक्षिक और पारंपरिक नींव प्रदान की।',
  aboutP3: 'अपने 15+ वर्षों के अनुभव के दौरान आचार्य जी ने अनेक लोगों को जन्म कुंडली विश्लेषण, करियर, विवाह एवं संबंध, पारिवारिक जीवन, आर्थिक स्थिति, स्वास्थ्य तथा आध्यात्मिक उन्नति से जुड़े विषयों पर मार्गदर्शन प्रदान किया है।',
  aboutP4: 'आचार्य जी का दृष्टिकोण केवल त्वरित समाधान देने तक सीमित नहीं है। वे व्यक्ति की जन्म कुंडली का सूक्ष्म एवं विस्तृत अध्ययन करके जीवन की परिस्थितियों को समझने और उचित दिशा प्रदान करने का प्रयास करते हैं।',
  aboutP5: 'प्रत्येक परामर्श व्यक्तिगत, गोपनीय, सहानुभूतिपूर्ण और व्यावहारिक होता है। पारंपरिक वैदिक उपाय, मंत्र, पूजा, अनुष्ठान एवं कर्मकांड के माध्यम से वे मानसिक शांति, सकारात्मकता, संतुलन और समृद्धि की दिशा में मार्गदर्शन प्रदान करते हैं।',
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
  heroLocation: 'Shri Ganesh Mandir\nVaish College, Near Railway Station\nRohtak – 124001',

  // About
  aboutHeading1: 'Ancient Vedic Wisdom,',
  aboutHeading2: 'Classical Education & 15+ Years of Experience',
  aboutP1: 'Acharya Kamal Nayan Mishra is a respected Vedic Astrologer, Karmakand Specialist, and Spiritual Guide based at Shri Ganesh Mandir, Rohtak. With 15+ years of experience, he has dedicated his life to the study and practice of Vedic Astrology, Karmakand, and traditional Sanatan practices.',
  aboutP2: 'He received his traditional Sanskrit and Shastric education from Sampurnanand Sanskrit Vishwavidyalaya, Varanasi, providing him with a strong academic and traditional foundation in Indian knowledge systems, Jyotish Shastra, and Vedic rituals.',
  aboutP3: 'Over the course of his 15+ years of experience, Acharya Ji has guided individuals on matters related to Kundli analysis, career, marriage and relationships, family life, financial matters, health, and spiritual growth.',
  aboutP4: 'His approach goes beyond providing quick or superficial solutions. He carefully studies an individual\'s Kundli (birth chart) to understand important planetary influences and provide thoughtful, personalized guidance suited to the individual\'s circumstances.',
  aboutP5: 'Every consultation is personal, confidential, compassionate, and practical. His guidance incorporates traditional Vedic remedies, mantras, puja, rituals, and Karmakand practices aimed at helping individuals find greater clarity, peace, balance, positivity, and prosperity.',
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
