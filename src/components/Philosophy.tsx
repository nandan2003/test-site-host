
import { Brain, Zap, Cpu } from "lucide-react";

const philosophies = [
  {
    icon: Brain,
    title: 'Signal Awareness',
    description: 'Sanketa reads patterns, not just triggers'
  },
  {
    icon: Zap,
    title: 'Intent Recognition',
    description: 'Flows are shaped around purpose, not conditions'
  },
  {
    icon: Cpu,
    title: 'Decision-Making Autonomy',
    description: 'Agents adapt and self-route based on goals'
  }
];

export function Philosophy() {
  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Built to Think, Not React
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {philosophies.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                  <Icon className="h-8 w-8 text-purple-400" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
