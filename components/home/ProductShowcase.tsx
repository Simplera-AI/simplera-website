import Link from "next/link";
import FadeInUp from "@/components/ui/FadeInUp";

const features = [
  "Analyze Excel, CSV, and free-text clinical documents",
  "Three analysis modes: Keyword, Concept, and Sentence Search",
  "AI-powered classification with negation detection",
  "100% browser-based — patient data never leaves your machine",
  "Color-coded results with confidence indicators",
  "Export to CSV or Excel with full audit trail",
];

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left: Info */}
        <FadeInUp>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-teal bg-accent-teal/10 border border-accent-teal/20 rounded-md mb-5">
            FLAGSHIP PRODUCT
          </span>
          <h2 className="text-3xl md:text-[40px] font-bold text-white tracking-tight mb-4">
            ClinDetect
          </h2>
          <p className="text-[17px] text-text-secondary leading-relaxed mb-8">
            Clinical text analysis that turns any unstructured clinical data — pathology reports, clinical notes, imaging results — into structured, actionable data.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 text-[15px] text-gray-400 border-b border-white/[0.04] pb-3"
              >
                <span className="text-accent-teal mt-0.5 shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <Link href="/products" className="btn-primary inline-block">
            Learn More →
          </Link>
        </FadeInUp>

        {/* Right: App Preview */}
        <FadeInUp delay={0.2}>
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 overflow-hidden">
            {/* Browser chrome */}
            <div className="flex gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            {/* Mock app */}
            <div className="bg-black/30 rounded-lg p-5 space-y-3">
              <div className="h-3 rounded bg-gradient-to-r from-accent-teal/15 to-accent-blue/10 w-4/5" />
              <div className="h-3 rounded bg-white/[0.04] w-3/5" />
              <div className="h-3 rounded bg-white/[0.04] w-full" />
              {/* Mock table */}
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  "", "green", "amber", "gray",
                  "", "green", "green", "amber",
                  "", "gray", "green", "green",
                  "", "green", "amber", "green",
                  "", "amber", "green", "gray",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`h-7 rounded ${
                      color === "green"
                        ? "bg-emerald-500/15"
                        : color === "amber"
                        ? "bg-amber-500/15"
                        : color === "gray"
                        ? "bg-gray-500/10"
                        : "bg-white/[0.03]"
                    }`}
                  />
                ))}
              </div>
              <div className="h-3 rounded bg-white/[0.04] w-3/5 mt-3" />
              <div className="h-3 rounded bg-white/[0.04] w-4/5" />
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
