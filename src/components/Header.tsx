
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    // Find the About section by looking for the component
    const aboutSection = document.querySelector('section:has(h2)');
    const sections = document.querySelectorAll('section');
    const aboutSectionElement = Array.from(sections).find(section => 
      section.textContent?.includes('About Sanketa')
    );
    aboutSectionElement?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Sanketa</h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" onClick={scrollToAbout} className="hover-glow">
              About
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="hover-glow">
              Services
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('process')} className="hover-glow">
              Process
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('faq')} className="hover-glow">
              FAQ
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')} className="hover-glow">
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
