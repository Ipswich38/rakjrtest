import { Header } from './components/Header';
import { HeroGrid } from './components/HeroGrid';
import { SoilRiskAssessment } from './components/SoilRiskAssessment';
import { ServicesGrid } from './components/ServicesGrid';
import { ProcessGrid } from './components/ProcessGrid';
import { AboutGrid } from './components/AboutGrid';
import { ContactGrid } from './components/ContactGrid';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4ea]">
      <Toaster />
      <Header />
      <main>
        <HeroGrid />
        <SoilRiskAssessment />
        <ServicesGrid />
        <ProcessGrid />
        <AboutGrid />
        <ContactGrid />
      </main>
      <Footer />
    </div>
  );
}
