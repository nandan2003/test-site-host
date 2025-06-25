
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    const sections = document.querySelectorAll('section');
    const aboutSectionElement = Array.from(sections).find(section => 
      section.textContent?.includes('About Sanketa')
    );
    aboutSectionElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 px-6 border-t border-border/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-2xl font-bold">Sanketa</h3>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={scrollToAbout} className="text-sm text-muted-foreground hover:text-primary transition-colors hover-glow">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm text-muted-foreground hover:text-primary transition-colors hover-glow">
              Services
            </button>
            <button onClick={() => {
              const processSection = document.querySelector('[class*="Process"]') || document.getElementById('process');
              if (processSection) {
                processSection.scrollIntoView({
                  behavior: 'smooth'
                });
              } else {
                // Fallback to scrolling to a section that contains "How We Work"
                const sections = document.querySelectorAll('section');
                const processSection = Array.from(sections).find(section => section.textContent?.includes('How We Work'));
                processSection?.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="text-sm text-muted-foreground hover:text-primary transition-colors hover-glow">
              Process
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm text-muted-foreground hover:text-primary transition-colors hover-glow">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-primary transition-colors hover-glow">
              Contact
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-end space-x-4">
            <a href="https://linkedin.com/company/sanketa" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:hello@sanketa.ai" className="text-muted-foreground hover:text-primary transition-colors hover-glow">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Sanketa. Building intelligent systems that think.
          </p>
        </div>
      </div>
    </footer>
  );
}
