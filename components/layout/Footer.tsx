import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "ClinDetect", href: "/products" },
    { label: "Documentation", href: "/products" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Simplera AI"
              width={120}
              height={34}
              className="h-9 w-auto mb-4"
            />
            <p className="text-sm text-text-secondary leading-relaxed">
              Intelligence simplified. Building AI-powered tools that make
              complex workflows effortless.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[2px] text-text-muted mb-4">
                {title}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.03] py-8 text-center text-xs text-text-muted">
        &copy; {new Date().getFullYear()} Simplera AI. All rights reserved.
      </div>
    </footer>
  );
}
