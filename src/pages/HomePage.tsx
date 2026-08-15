import { FC } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Trust } from '@/components/Trust';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const HomePage: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Trust />
        <Contact />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
