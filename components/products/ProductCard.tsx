"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInUp from "@/components/ui/FadeInUp";

const stats = [
  { value: "3", label: "Analysis Modes" },
  { value: "586+", label: "Automated Tests" },
  { value: "100%", label: "Browser-Based" },
  { value: "<1s", label: "Per-Row Analysis" },
];

const modes = [
  {
    id: "keyword",
    title: "Keyword Mode",
    description:
      "Define positive and negative keywords to search clinical text. Fully local — no AI needed. High-accuracy pattern matching with intelligent boundary detection. Perfect for simple, high-volume screening.",
  },
  {
    id: "concept",
    title: "Concept Mode",
    description:
      "Advanced clinical language understanding that detects assertion status, handles negation (\"no evidence of metastasis\"), resolves ambiguity with AI-powered classification, and recognizes synonym concepts. Built for the complexity of real-world clinical language.",
  },
  {
    id: "search",
    title: "Sentence Search Mode",
    description:
      "Describe what you're looking for in plain English. AI identifies matching sentences across your dataset, then classifies each as Present, Absent, or Uncertain. Ideal for ad-hoc research queries on unfamiliar datasets.",
  },
];

export default function ProductCard() {
  const [openMode, setOpenMode] = useState<string>("keyword");

  return (
    <section className="px-6 lg:px-16 max-w-7xl mx-auto">
      <FadeInUp>
        <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-teal bg-accent-teal/10 border border-accent-teal/20 rounded-md mb-4">
                FLAGSHIP PRODUCT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                ClinDetect
              </h2>
              <p className="text-text-secondary mt-2 max-w-xl text-[17px] leading-relaxed">
                Clinical text analysis that turns any unstructured clinical data — pathology reports, clinical notes, imaging results — into structured, actionable data.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn-primary !text-sm">
                Request a Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-5 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.value}
                </p>
                <p className="text-xs text-text-muted mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Analysis Modes Accordion */}
          <h3 className="text-xs uppercase tracking-[3px] text-text-muted mb-6">
            Analysis Modes
          </h3>
          <div className="space-y-3">
            {modes.map((mode) => (
              <div
                key={mode.id}
                className="rounded-xl border border-white/[0.06] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenMode(openMode === mode.id ? "" : mode.id)
                  }
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-white">
                    {mode.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-muted transition-transform duration-200 ${
                      openMode === mode.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    openMode === mode.id
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] text-text-secondary leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mock screenshot */}
          <div className="mt-12 rounded-xl bg-black/30 border border-white/[0.04] p-6">
            <div className="flex gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="space-y-3">
              <div className="h-4 rounded bg-gradient-to-r from-accent-teal/15 to-accent-blue/10 w-2/3" />
              <div className="h-3 rounded bg-white/[0.04] w-1/2" />
              <div className="grid grid-cols-6 gap-2 mt-4">
                {Array.from({ length: 24 }, (_, i) => {
                  const colors = [
                    "bg-white/[0.03]",
                    "bg-emerald-500/15",
                    "bg-amber-500/15",
                    "bg-gray-500/10",
                  ];
                  return (
                    <div
                      key={i}
                      className={`h-6 rounded ${colors[i % 4]}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </FadeInUp>
    </section>
  );
}
