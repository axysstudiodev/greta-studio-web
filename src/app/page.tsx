import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AppShowcase } from '@/components/AppShowcase';
import { BentoFeatures } from '@/components/BentoFeatures';
import { UseCases } from '@/components/UseCases';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { DownloadSection } from '@/components/DownloadSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D0E11] text-[#F3F4F6]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AppShowcase />
        <BentoFeatures />
        <UseCases />
        <Pricing />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
