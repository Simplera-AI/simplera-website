import type { Metadata } from "next";
import FadeInUp from "@/components/ui/FadeInUp";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Simplera AI",
  description:
    "Get in touch with Simplera AI to learn how our products can transform your workflow.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <SectionHeader
              label="Contact Us"
              title="Let's talk"
              description="Have a question about our products or want to discuss how Simplera AI can help your organization? We'd love to hear from you."
            />

            <FadeInUp delay={0.2}>
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@simpleraai.com"
                    className="text-accent-teal hover:underline"
                  >
                    contact@simpleraai.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    Response Time
                  </h3>
                  <p className="text-text-secondary text-sm">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right: Form */}
          <FadeInUp delay={0.1}>
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8">
              <ContactForm />
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
