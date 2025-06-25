
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Wrench, Signal, X } from "lucide-react";

const services = [
  {
    id: 'automations',
    icon: Settings,
    title: 'Intelligent Automations',
    description: 'We build trigger-based systems that don\'t just react – they respond, using logic, data, and decision flows.',
    expandedTitle: 'Trigger-aware flows that operate with logic, not just reaction.',
    expandedDescription: 'We create automation pipelines that listen, decide, and execute — all with context awareness.',
    features: [
      'Multi-platform integrations (email, forms, sheets, APIs)',
      'Dynamic logic instead of linear triggers',
      'Real-time responsiveness to business events',
      'Robust error handling and observability',
      'Ideal for internal ops, reporting, lead handling'
    ]
  },
  {
    id: 'workflows',
    icon: Wrench,
    title: 'Contextual AI Workflows',
    description: 'Workflows that understand purpose, content, and flow – not just if-this-then-that rules.',
    expandedTitle: 'Design systems that follow intent, not instructions.',
    expandedDescription: 'These are structured processes that adapt based on purpose, user input, or state.',
    features: [
      'Understands the "why" behind each step',
      'Supports branching logic and memory',
      'Modular design for rapid iteration',
      'Ideal for approval flows, onboarding, and coordination',
      'Works across apps, with human-in-the-loop support'
    ]
  },
  {
    id: 'agents',
    icon: Signal,
    title: 'Autonomous AI Agents & Agentic Systems',
    description: 'Deploy AI agents that plan, reason, and act like competent digital teammates.',
    expandedTitle: 'Agents that think, plan, and act – like a digital teammate.',
    expandedDescription: 'Deploy AI-powered agents that make decisions, take actions, and coordinate tools intelligently.',
    features: [
      'Built with LLMs, tool access, and memory',
      'Can use APIs, spreadsheets, or databases as tools',
      'Ideal for knowledge retrieval, task execution, or communication',
      'Fully modular: embed in web apps, dashboards, or backend flows',
      'Optionally self-hosted or cloud-deployed'
    ]
  }
];

export function Services() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (serviceId: string) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          What We Build
        </h2>
        
        <div className="grid gap-8 md:gap-6 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === service.id;
            
            return (
              <Card
                key={service.id}
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl border-border/20 hover-glow ${
                  isExpanded ? 'bg-accent/20 border-primary/30 scale-105' : 'hover:border-border/40 hover:scale-105'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleCardClick(service.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6 flex-1">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      
                      {!isExpanded ? (
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-sm font-medium text-primary">
                            {service.expandedTitle}
                          </p>
                          <p className="text-muted-foreground">
                            {service.expandedDescription}
                          </p>
                          <ul className="space-y-2 mt-4">
                            {service.features.map((feature, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="ml-4 flex-shrink-0 hover-glow">
                    {isExpanded ? <X className="h-4 w-4" /> : <span className="text-xs">+</span>}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
