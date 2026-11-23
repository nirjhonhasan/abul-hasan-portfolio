import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  label: string; // small badge text
  watermark?: string; // big faint word behind the title (defaults to the label)
  title: string; // plain part of the title
  highlight: string; // gradient part of the title
  description?: string;
  align?: "left" | "center";
};

// Shared heading for page sections: badge, big gradient title, underline and optional description.
export default function SectionHeading({ label, watermark, title, highlight, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`relative ${centered ? "text-center" : ""}`}>
      {/* Big faint watermark word behind the heading */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-6 whitespace-nowrap select-none text-7xl font-black tracking-tighter text-foreground/[0.05] uppercase sm:-top-10 sm:text-9xl ${
          centered ? "left-1/2 -translate-x-1/2" : "-left-2"
        }`}
      >
        {watermark ?? label}
      </span>

      <p className="glass relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold tracking-widest uppercase">
        <Sparkles aria-hidden className="size-4 text-brand-violet" />
        <span className="bg-linear-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">{label}</span>
      </p>

      <h2
        className={`relative mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${
          centered ? "mx-auto max-w-3xl" : "max-w-4xl"
        }`}
      >
        {title}{" "}
        <span className="bg-linear-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">{highlight}</span>
      </h2>

      {/* Decorative underline */}
      <div aria-hidden className={`relative mt-6 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <span className="h-1.5 w-20 rounded-full bg-linear-to-r from-brand-blue to-brand-violet" />
        <span className="size-2 rounded-full bg-brand-violet" />
        <span className="size-1.5 rounded-full bg-brand-blue/60" />
      </div>

      {description && (
        <p className={`relative mt-6 max-w-2xl text-lg leading-8 text-muted-foreground ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
