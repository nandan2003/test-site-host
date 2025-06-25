import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex flex-col items-center justify-center relative luxury-gradient pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-2xl mb-6 tracking-tight animate-fade-in font-bold md:text-4xl">
          Sanketa builds automations and{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI agents</span>{' '}
          that act on context,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">not rules</span>.
        </h1>
        
        <p className="text-base text-muted-foreground mb-12 font-light animate-fade-in md:text-base">
          We don't just automate. We make your systems think.
        </p>
        
        <Button onClick={scrollToServices} size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium hover-glow border-0 animate-fade-in">
          Learn More
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Animated elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
    </section>;
}