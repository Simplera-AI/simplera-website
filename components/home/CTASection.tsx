import Link from "next/link";
import FadeInUp from "@/components/ui/FadeInUp";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 text-center px-6">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,170,0.08), transparent 70%)",
        }}
      />
      <FadeInUp className="relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Ready to simplify intelligence?
        </h2>
        <p className="text-lg text-text-secondary mb-10 max-w-lg mx-auto">
          Get in touch to see how Simplera AI products can transform your
          workflow.
        </p>
        <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
          Contact Us
        </Link>
      </FadeInUp>
    </section>
  );
}
