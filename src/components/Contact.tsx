
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    console.log('Form submitted:', formData);
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleBookCall = () => {
    // This would integrate with a scheduling system like Calendly
    alert("Booking system will be integrated soon!");
  };

  const handleTalkToAgent = () => {
    // This would launch the AI agent chat
    alert("Connecting to Sanketa AI Agent...");
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Let's Design Thinking Systems Together
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Book a Call / Talk to Agent */}
          <Card className="p-8 border-border/20 flex flex-col h-full hover-glow animate-fade-in">
            <div className="flex flex-col h-full space-y-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Book a Call</h3>
              </div>
              
              {/* Direct Schedule Call - 2/3 size */}
              <div className="flex-1 space-y-4 pb-4 border-b border-border/20">
                <h4 className="text-lg font-medium text-center">Schedule Direct Call</h4>
                <p className="text-muted-foreground text-center text-sm">
                  Book a 30-minute discovery call directly to discuss your automation needs.
                </p>
                <Button 
                  onClick={handleBookCall}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 hover-glow"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Call Now
                </Button>
              </div>
              
              {/* AI Agent Schedule - 1/3 size */}
              <div className="space-y-3">
                <h4 className="text-md font-medium text-center">Talk to AI Agent First</h4>
                <p className="text-muted-foreground text-center text-xs">
                  Chat with our AI agent before scheduling.
                </p>
                <Button 
                  onClick={handleTalkToAgent}
                  size="default" 
                  variant="outline" 
                  className="w-full hover-glow"
                >
                  <MessageCircle className="mr-2 h-3 w-3" />
                  Talk to Agent
                </Button>
              </div>
            </div>
          </Card>

          {/* Send Message */}
          <Card className="p-8 border-border/20 flex flex-col h-full hover-glow animate-fade-in">
            <div className="space-y-6 flex flex-col flex-1">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
                <p className="text-muted-foreground">
                  Tell us about your project and we'll get right back to you.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <Input
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="console-input hover-glow"
                  required
                />
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="console-input hover-glow"
                  required
                />
                
                <Input
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="console-input hover-glow"
                />
                
                <Textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="console-input min-h-[120px] resize-none flex-1 hover-glow"
                  required
                />
                
                <Button type="submit" size="lg" className="w-full hover-glow">
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
