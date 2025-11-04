import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function HeroGrid() {
  return (
    <section id="hero" className="relative min-h-screen flex items-end">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1685692145167-6b773148d776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjcmFuZSUyMHNreXxlbnwxfHx8fDE3NjE4MjM2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construction excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-32 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tighter leading-[0.9]">
              Geotechnical
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mb-4 leading-relaxed">
              Professional soil testing and engineering services ensuring structural integrity across the Philippines
            </p>
            <p className="text-sm text-white/70 mb-12">Since 2019</p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <Button 
                onClick={() => document.getElementById('soil-assessment')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#10c202] hover:bg-[#028118] text-white rounded-full h-12 px-8"
              >
                Free Risk Assessment
                <ArrowRight size={18} className="ml-2" />
              </Button>
               <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#10c202] hover:bg-[#028118] text-white rounded-full h-12 px-8"
              >
                Request Quote
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="border-l-2 border-[#10c202] pl-4">
                <div className="text-4xl text-white mb-1 tracking-tight">6+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Years Since 2019</div>
              </div>
              <div className="border-l-2 border-[#10c202] pl-4">
                <div className="text-4xl text-white mb-1 tracking-tight">15+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Projects</div>
              </div>
              <div className="border-l-2 border-[#10c202] pl-4">
                <div className="text-4xl text-white mb-1 tracking-tight">85%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
