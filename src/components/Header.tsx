import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { name: 'Assessment', id: 'soil-assessment' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Process', id: 'process' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' }
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <img src="/rjlogonew.png" alt="RAK-JR Logo" className="h-14 w-auto" />
            <div className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-xl tracking-tight">RAK-JR</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-6">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm tracking-wide transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-[#028118]' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
                {index < navItems.length - 1 && (
                  <div className={`w-px h-4 ${isScrolled ? 'bg-gray-300' : 'bg-white/30'}`} />
                )}
              </div>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              size="sm"
              className={`rounded-full ml-2 ${
                isScrolled
                  ? 'bg-[#10c202] hover:bg-[#028118] text-white'
                  : 'bg-white text-[#028118] hover:bg-gray-100'
              }`}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-[#028118] transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="w-full bg-[#10c202] hover:bg-[#028118] text-white rounded-full"
            >
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
