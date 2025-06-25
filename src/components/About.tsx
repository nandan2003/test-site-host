
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          About Sanketa
        </h2>
        
        <div className="text-lg text-muted-foreground leading-relaxed mb-8">
          <p>
            Sanketa is an independent systems studio that designs intelligent automations, logic-driven workflows, and deployable AI agents. Our focus is functional precision systems that understand goals, respond to context, and operate without brittle rules. Built by a solo engineer, Sanketa combines system design, AI reasoning, and full-stack automation in one place. No fluff. Just engineered intelligence.
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center mx-auto text-primary hover:text-primary/80 transition-colors"
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Show Less</span>
              <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              <span className="mr-2">Learn More</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>

        {isExpanded && (
          <div className="mt-8 text-lg text-muted-foreground leading-relaxed animate-fade-in">
            <p>
              We don't offer templates. We build thinking systems that respond to real-world inputs. Whether it's automating internal ops, building context-aware workflows, or deploying autonomous AI agents, Sanketa delivers systems that work like intelligent teammates. Every build is modular, extensible, and grounded in execution — not theory. You bring the objective. We translate it into logic, tools, and action.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
