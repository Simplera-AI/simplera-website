import type { Metadata } from "next";
import FadeInUp from "@/components/ui/FadeInUp";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About — Simplera AI",
  description:
    "Learn about Simplera AI's mission to simplify intelligence through purpose-built AI products.",
};

const values = [
  {
    title: "Simplicity Above All",
    description:
      "Complex problems deserve elegant solutions. We strip away unnecessary complexity so users can focus on what matters.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Privacy by Design",
    description:
      "We believe your data is yours. Our tools are built to work on your infrastructure, keeping sensitive information where it belongs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Precision Matters",
    description:
      "In healthcare and enterprise contexts, accuracy isn't optional. We rigorously test and validate every tool we build.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
  {
    title: "Built for Scale",
    description:
      "From day one, we engineer products with enterprise-grade reliability — robust APIs, comprehensive test suites, and clean architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Mission */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-24">
        <SectionHeader
          label="About Us"
          title="Intelligence simplified"
          description="Simplera AI builds intelligent software that transforms how organizations work with data. We take complex, time-consuming workflows and turn them into tools that just work."
        />

        <FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Our Mission
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We exist to close the gap between cutting-edge AI research and
                the real-world tools that professionals use every day. Our
                products are not general-purpose — they are purpose-built for
                specific, high-impact problems where precision, privacy, and
                simplicity matter most.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Our Approach
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Every product starts with a deep understanding of the problem
                domain. We work closely with industry professionals to build
                tools that fit naturally into existing workflows — not the other
                way around. Privacy is non-negotiable, and we design for
                enterprise-grade reliability from day one.
              </p>
            </div>
          </div>
        </FadeInUp>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-16 max-w-7xl mx-auto pb-24">
        <FadeInUp>
          <p className="text-xs uppercase tracking-[3px] text-accent-teal mb-4">
            Our Values
          </p>
          <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight mb-12">
            What drives us
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <FadeInUp key={value.title} delay={i * 0.1}>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-accent-teal/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-teal/15 to-accent-blue/15 flex items-center justify-center mb-5 text-accent-teal">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
