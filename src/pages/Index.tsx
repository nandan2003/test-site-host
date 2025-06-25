
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Philosophy } from "@/components/Philosophy";
import { Process } from "@/components/Process";
import { Integrations } from "@/components/Integrations";
import { ChatAgent } from "@/components/ChatAgent";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen text-foreground">
      <Header />
      <Hero />
      <div className="uniform-section-bg">
        <About />
      </div>
      <div id="services" className="uniform-section-bg">
        <Services />
      </div>
      <div className="uniform-section-bg">
        <WhyChooseUs />
      </div>
      <div className="uniform-section-bg">
        <Philosophy />
      </div>
      <div id="process" className="uniform-section-bg">
        <Process />
      </div>
      <div className="uniform-section-bg">
        <Integrations />
      </div>
      <div className="uniform-section-bg">
        <ChatAgent />
      </div>
      <div id="faq" className="uniform-section-bg">
        <FAQ />
      </div>
      <div id="contact" className="uniform-section-bg">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
