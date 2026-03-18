import FadeInUp from "./FadeInUp";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <FadeInUp>
      <p className="text-xs uppercase tracking-[3px] text-accent-teal mb-4">
        {label}
      </p>
      <h2 className="text-3xl md:text-[44px] font-bold leading-tight tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-secondary leading-relaxed max-w-xl mb-16">
          {description}
        </p>
      )}
    </FadeInUp>
  );
}
