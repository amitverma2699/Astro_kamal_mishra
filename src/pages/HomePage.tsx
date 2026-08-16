import { FC, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Trust } from '@/components/Trust';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const HomePage: FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Services onSelectService={setSelectedService} />
        <Trust />
        <Contact selectedService={selectedService} onServiceChange={setSelectedService} />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

