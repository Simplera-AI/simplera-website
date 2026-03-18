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
      "Define positive and negative keywords to search clinical text. High-accuracy pattern matching with intelligent boundary detection. Perfect for simple, high-volume screening.",
  },
  {
    id: "concept",
    title: "Concept Mode",
    description:
      "Advanced clinical language understanding that detects assertion status, handles negation (\"no evidence of metastasis\"), resolves ambiguity, and recognizes synonym concepts. Built for the complexity of real-world clinical language.",
  },
  {
    id: "search",
    title: "Sentence Search Mode",
    description:
      "Describe what you're looking for in plain English. AI identifies matching sentences across your dataset, then classifies each as Present, Absent, or Uncertain. Ideal for ad-hoc research queries on unfamiliar datasets.",
  },
];

const previewRows = [
  { id: 1, patientId: "cd3866d9-66b1-4f15-a152-0f11ef08d691", testType: "Anatomic Pathology — Primary Malignancy", status: "NO", evidence: "organoid neuroendocrine carcinoma with ros…" },
  { id: 2, patientId: "a749c1d8-e4f3-4d97-a91b-58fe9f5446a3", testType: "Pathology Report — Secondary Malignancy", status: "YES", evidence: "outside institution reported metastatic Non-…" },
  { id: 3, patientId: "612a9d07-9250-492d-a5c3-69f91e733507", testType: "Molecular Pathology — Metastatic Solid Tumor", status: "YES", evidence: "M1b — multiple organ involvement; this biop…" },
  { id: 4, patientId: "93ae95c3-7ceb-410f-960c-0f3b08d6ed2e", testType: "Surgical Pathology — Primary Solid Tumor", status: "POSSIBLE", evidence: "Morphology favors metastatic adenocarcino…" },
  { id: 5, patientId: "12175a83-4120-4bf1-a934-581dacf58c66", testType: "Pathology Report — Primary Carcinoma", status: "NO", evidence: "staging negative for metastasis" },
  { id: 6, patientId: "a1ea1cd0-1af2-4113-939a-c838b77584e6", testType: "Histopathology — Primary Surgical Excision", status: "NO", evidence: "—" },
  { id: 7, patientId: "fe31a69c-139d-4011-aab0-df3da1d0d1fc", testType: "Surgical Pathology — Primary Solid Tumor", status: "POSSIBLE", evidence: "6/21 nodes positive; extranodal extension 2.8…" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "YES") {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
        YES
      </span>
    );
  }
  if (status === "POSSIBLE") {
    return (
      <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
        POSSIBLE
      </span>
    );
  }
  return (
    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-bold bg-white/[0.06] text-gray-400 border border-white/[0.08]">
      NO
    </span>
  );
}

export default function ProductCard() {
  const [openModes, setOpenModes] = useState<Set<string>>(
    new Set(["keyword", "concept", "search"])
  );

  function toggleMode(id: string) {
    setOpenModes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) { next.delete(id); } else { next.add(id); }
      return next;
    });
  }

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
                  onClick={() => toggleMode(mode.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-white">
                    {mode.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-text-muted transition-transform duration-200 ${
                      openModes.has(mode.id) ? "rotate-180" : ""
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
                    openModes.has(mode.id)
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

          {/* Real UI Preview */}
          <div className="mt-12 rounded-xl bg-[#0d1117] border border-white/[0.06] overflow-hidden">
            {/* Window chrome */}
            <div className="flex gap-1.5 px-4 pt-3 pb-2 border-b border-white/[0.04]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>

            <div className="p-5">
              {/* Summary stats */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Total Records</p>
                  <p className="text-2xl font-bold text-white">500</p>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Positive Hits</p>
                  <p className="text-2xl font-bold text-emerald-400">242</p>
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 text-center">
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Possible Matches</p>
                  <p className="text-2xl font-bold text-amber-400">95</p>
                </div>
              </div>

              {/* Concept label */}
              <div className="rounded-lg bg-white/[0.02] border border-white/[0.05] px-4 py-3 mb-3">
                <p className="text-sm font-semibold text-white">Mets</p>
                <p className="text-xs text-gray-500 mt-0.5">388 candidates screened</p>
              </div>

              {/* Table */}
              <p className="text-xs text-gray-500 mb-2">Preview: first 50 rows of output</p>
              <div className="overflow-x-auto rounded-lg border border-white/[0.05]">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                      <th className="px-3 py-2 text-left text-gray-500 font-medium w-6">#</th>
                      <th className="px-3 py-2 text-left text-gray-500 font-medium">PatientID</th>
                      <th className="px-3 py-2 text-left text-gray-500 font-medium hidden md:table-cell">TestType</th>
                      <th className="px-3 py-2 text-left text-gray-500 font-medium">Mets | Status</th>
                      <th className="px-3 py-2 text-left text-gray-500 font-medium hidden lg:table-cell">Mets | Evidence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewRows.map((row) => (
                      <tr key={row.id} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                        <td className="px-3 py-2 text-gray-600">{row.id}</td>
                        <td className="px-3 py-2 text-gray-400 font-mono text-[10px] max-w-[140px] truncate">{row.patientId}</td>
                        <td className="px-3 py-2 text-gray-400 hidden md:table-cell max-w-[200px] truncate">{row.testType}</td>
                        <td className="px-3 py-2">
                          <StatusBadge status={row.status} />
                        </td>
                        <td className="px-3 py-2 text-gray-500 hidden lg:table-cell max-w-[200px] truncate">{row.evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </FadeInUp>
    </section>
  );
}
