import SectionHeader from "@/components/ui/SectionHeader";
import FadeInUp from "@/components/ui/FadeInUp";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Clinical NLP",
    description:
      "Extract structured insights from unstructured clinical text with medical-grade accuracy.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Privacy-First",
    description:
      "Data stays on your infrastructure. No cloud processing required for core analysis.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Enterprise-Ready",
    description:
      "Built for scale with robust APIs, audit trails, and compliance-friendly architecture.",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <SectionHeader
        label="What We Build"
        title="Intelligent tools for real-world problems"
        description="We identify complex workflows that drain your team's time and build AI-powered solutions that handle them with precision."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <FadeInUp key={feature.title} delay={i * 0.1}>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-accent-teal/20 hover:bg-accent-teal/[0.02] transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-teal/15 to-accent-blue/15 flex items-center justify-center mb-5 text-accent-teal">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
