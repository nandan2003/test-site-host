
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export function ChatAgent() {
  const handleLaunchDemo = () => {
    // For now, just show an alert - in future this would launch the actual demo
    alert("Agent demo launching soon! This will connect you with Sanketa's AI agent.");
  };

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Confused? Talk to Sanketa Agent
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
          A glimpse of how your own agent can think. Ask it anything about Sanketa.
        </p>
        
        <Card className="agent-interface p-8 rounded-2xl border-2 hover-glow animate-fade-in">
          <div className="space-y-8">
            {/* Agent Header */}
            <div className="flex items-center justify-center space-x-4">
              <div className="agent-avatar w-16 h-16 rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white">Sanketa Agent</h3>
                <p className="text-blue-300 flex items-center">
                  <Sparkles className="h-4 w-4 mr-1" />
                  AI Assistant
                </p>
              </div>
            </div>
            
            {/* Agent Message */}
            <div className="agent-message p-6 rounded-xl max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 italic leading-relaxed">
                "Hello! I'm Sanketa's AI agent. I understand our automation systems, AI workflows, and agent capabilities. Ask me about implementation timelines, integration possibilities, or how our solutions might fit your specific needs."
              </p>
            </div>
            
            {/* Launch Demo Section */}
            <div className="space-y-4">
              <Button 
                onClick={handleLaunchDemo}
                size="lg" 
                className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 hover-glow"
              >
                Launch Agent Demo
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
