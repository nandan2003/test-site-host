
export function WhyChooseUs() {
  const reasons = [
    {
      title: "Systems That Think",
      description: "We don't hardcode steps. We design logic that adapts, responds, and acts based on intent and input."
    },
    {
      title: "Direct Execution", 
      description: "No middle layers, no delays. One engineer builds, deploys, and maintains your system end-to-end."
    },
    {
      title: "No Vendor Lock-in",
      description: "Every component is modular, open, and replaceable. Integrate with what you already use. Change tools anytime."
    },
    {
      title: "Built for Change",
      description: "Your workflows will evolve. Sanketa systems are designed to evolve with them — without rewrites or rebuilds."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Sanketa
        </h2>
        
        <div className="space-y-8">
          {reasons.map((reason, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
