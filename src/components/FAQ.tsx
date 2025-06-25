
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's the difference between automations, AI workflows, and agents?",
    answer: "Automations handle simple, trigger-based tasks using logic (e.g., 'if form submitted, send email'). AI Workflows are structured, multi-step processes powered by language models that adapt to goals and context. Agents go further — they plan, decide, and act like autonomous digital teammates, using tools and executing goals independently."
  },
  {
    question: "Do I need to be technical to work with Sanketa?",
    answer: "No. The systems are designed for your goals, not your technical skill. You explain the problem; Sanketa designs the solution — whether you're technical or not."
  },
  {
    question: "Can I host these systems myself?",
    answer: "Yes. Automations and agents can be deployed on your infrastructure or cloud, depending on your preference. Local hosting, cloud deployment, or hybrid options are supported."
  },
  {
    question: "Do you use open-source or proprietary tools?",
    answer: "Mostly open-source and modular systems. Every component is replaceable, portable, and vendor-neutral — unless your use-case demands otherwise."
  },
  {
    question: "I don't know what I need yet. Where do I start?",
    answer: "You don't need to. Just describe your current problem or goal. Sanketa Agent (our embedded agent) or the team will classify it and suggest the right system automatically."
  },
  {
    question: "Are your agents LLM-based? What models do you use?",
    answer: "Yes. Agents are powered by leading LLMs (like GPT-4o, Claude, etc) or local models (like GPT4All or Ollama), depending on your privacy, cost, and performance needs."
  },
  {
    question: "What tools can your systems integrate with?",
    answer: "Any tool that supports an API, webhook, or structured input: Airtable, Notion, Gmail, Google Sheets, Slack, HubSpot, LangChain, and dozens more."
  },
  {
    question: "How long does it take to build a system?",
    answer: "Most systems are built and deployed within a couple of days depending on complexity. One-off automations are faster. Agents and full-stack workflows take slightly longer."
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Answered Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/20 rounded-lg px-6 bg-background/50"
            >
              <AccordionTrigger className="text-left font-medium py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
