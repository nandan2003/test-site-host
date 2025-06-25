
import { Radar, Network, Cog, CheckCircle, TrendingUp } from "lucide-react";

const processSteps = [
  {
    icon: Radar,
    title: 'Signal Intake',
    description: 'Understand your current systems, pain points, and intentions'
  },
  {
    icon: Network,
    title: 'System Mapping',
    description: 'Design flows and agents with functional clarity'
  },
  {
    icon: Cog,
    title: 'Implementation',
    description: 'Deploy automations or agents, test and refine'
  },
  {
    icon: CheckCircle,
    title: 'Handoff + Optimization',
    description: 'Full delivery, documentation, and optional oversight'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'Monitor performance and iterate based on real-world usage'
  }
];

export function Process() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How We Work
        </h2>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-border hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="text-center relative">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 relative z-10 border-2 border-background shadow-lg">
                    <Icon className="h-8 w-8 text-purple-400" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
