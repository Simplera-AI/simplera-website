"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get("name")?.toString().trim()) errs.name = "Name is required";
    const email = form.get("email")?.toString().trim() || "";
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Invalid email format";
    if (!form.get("message")?.toString().trim())
      errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    // Honeypot check
    if (form.get("_gotcha")) return;

    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          message: form.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Message sent!
        </h3>
        <p className="text-text-secondary">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
          Name <span className="text-accent-teal">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
            errors.name ? "border-red-500/50" : "border-white/[0.08]"
          } text-white placeholder-text-muted focus:border-accent-teal/50 focus:outline-none transition-colors`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
          Email <span className="text-accent-teal">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
            errors.email ? "border-red-500/50" : "border-white/[0.08]"
          } text-white placeholder-text-muted focus:border-accent-teal/50 focus:outline-none transition-colors`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm text-text-secondary mb-1.5">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-text-muted focus:border-accent-teal/50 focus:outline-none transition-colors"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
          Message <span className="text-accent-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border ${
            errors.message ? "border-red-500/50" : "border-white/[0.08]"
          } text-white placeholder-text-muted focus:border-accent-teal/50 focus:outline-none transition-colors resize-none`}
          placeholder="Tell us about your needs..."
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {state === "error" && (
        <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {state === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
