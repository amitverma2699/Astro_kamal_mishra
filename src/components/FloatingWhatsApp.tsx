import { FC, useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/constants';

export const FloatingWhatsApp: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulse effect rings */}
        <span className="absolute w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </a>
    </div>
  );
};
