import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { DownloadSection } from '@/components/DownloadSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D0E11] text-[#F3F4F6]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
