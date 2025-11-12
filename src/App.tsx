import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroGrid } from './components/HeroGrid';
import { SoilRiskAssessment } from './components/SoilRiskAssessment';
import { ServicesGrid } from './components/ServicesGrid';
import { Projects } from './components/Projects';
import { ProcessGrid } from './components/ProcessGrid';
import { AboutGrid } from './components/AboutGrid';
import { ContactGrid } from './components/ContactGrid';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { AdminProvider } from './contexts/AdminContext';
import { AdminPanel } from './components/admin/AdminPanel';
import Library from './components/Library';
import Whitepaper from './components/Whitepaper';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f3f4ea]">
      <Header />
      <main>
        <HeroGrid />
        <SoilRiskAssessment />
        <ServicesGrid />
        <Projects />
        <ProcessGrid />
        <AboutGrid />
        <ContactGrid />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="min-h-screen">
          <Toaster />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admindashboard" element={<AdminPanel />} />
            <Route path="/library" element={<Library />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
        </div>
      </Router>
    </AdminProvider>
  );
}
