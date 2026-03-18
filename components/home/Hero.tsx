"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent-teal/40 blur-[120px] top-[10%] left-[15%] animate-float" />
        <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent-purple/40 blur-[120px] top-[25%] right-[10%] animate-float-delayed" />
        <div className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent-blue/30 blur-[120px] bottom-[5%] left-[35%] animate-float-slow" />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content — CSS animation instead of Framer Motion to avoid hydration issues */}
      <div className="relative z-10 max-w-4xl animate-hero-fade-in">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-teal/30 bg-accent-teal/5 text-accent-teal text-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse-dot" />
          Now available — ClinDetect v1
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
          AI tools that make
          <br />
          <span className="gradient-text">complex simple</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
          We build intelligent software that transforms how organizations work
          with data. Privacy-first. Enterprise-ready. Beautifully simple.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary text-center">
            Explore Products
          </Link>
          <Link href="/about" className="btn-secondary text-center">
            Learn More
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent animate-scroll-line origin-top" />
        <span className="text-[11px] tracking-widest uppercase">scroll</span>
      </div>
    </section>
  );
}
