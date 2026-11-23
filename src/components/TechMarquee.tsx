import { technologies } from "@/lib/site";

// A glass strip with the technologies scrolling endlessly. The list is rendered twice and the track
// moves left by exactly half its width, so the loop is seamless. Hovering pauses it.
export default function TechMarquee() {
  return (
    <section aria-label="Technologies I use" className="px-4 pb-10 sm:px-6 lg:px-8">
      <div className="group mx-auto max-w-7xl overflow-hidden py-4">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {[0, 1].map((copy) => (
              // The second copy only exists for the loop, so hide it from screen readers.
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-4 pr-4">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-5 py-2 text-sm font-semibold whitespace-nowrap transition-colors hover:border-brand-blue/50 hover:bg-brand-blue/10"
                  >
                    <span aria-hidden className="size-2 rounded-full bg-linear-to-br from-brand-blue to-brand-violet" />
                    {tech}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
