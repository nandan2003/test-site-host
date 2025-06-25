
const tools = [
  'Airtable', 'Notion', 'Google Sheets', 'Slack', 'Zapier', 
  'LangChain', 'Make.com', 'OpenAI', 'Replicate', 'HubSpot',
  'Gmail', 'Discord', 'Stripe', 'Linear', 'GitHub'
];

export function Integrations() {
  return (
    <section className="py-24 px-6 bg-accent/5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Integrates Seamlessly with Your Stack
        </h2>
        
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          From Airtable to Gmail to LangChain – we integrate with the tools you already trust.
        </p>
        
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-lg font-medium text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
