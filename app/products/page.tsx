import type { Metadata } from "next";
import ProductCard from "@/components/products/ProductCard";
import FadeInUp from "@/components/ui/FadeInUp";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Products — Simplera AI",
  description:
    "Explore Simplera AI's suite of intelligent tools, starting with ClinDetect for clinical text analysis.",
};

export default function ProductsPage() {
  return (
    <div className="pt-32">
      <section className="px-6 lg:px-16 max-w-7xl mx-auto mb-16">
        <SectionHeader
          label="Our Products"
          title="Purpose-built AI tools"
          description="Each product solves a specific, high-impact problem — with the precision, privacy, and reliability that enterprises demand."
        />
      </section>

      <ProductCard />

      {/* Coming Soon */}
      <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <FadeInUp>
          <div className="rounded-2xl border border-dashed border-white/10 p-12 text-center">
            <p className="text-text-muted text-sm uppercase tracking-[3px] mb-2">
              Coming Soon
            </p>
            <p className="text-text-secondary">
              More intelligent tools are in development. Stay tuned.
            </p>
          </div>
        </FadeInUp>
      </section>

      <CTASection />
    </div>
  );
}
