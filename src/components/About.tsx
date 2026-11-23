import Image from "next/image";
import { Code, Gauge, Palette } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services, skills } from "@/lib/site";

const serviceIcons = [Code, Palette, Gauge];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-foreground/10 bg-foreground/[0.04]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading label="About Me" title="Turning ideas into" highlight="fast, beautiful web experiences." />

      <div className="mt-16 grid gap-8 lg:grid-cols-[380px_1fr]">
        {/* Profile card */}
        <div className="glass relative overflow-hidden rounded-[2rem] p-6 text-center">
          <div aria-hidden className="absolute -top-20 left-1/2 size-64 -translate-x-1/2 rounded-full bg-linear-to-br from-brand-blue/50 to-brand-violet/50 blur-3xl" />
          <div className="relative mx-auto size-40 rounded-full bg-linear-to-br from-brand-blue to-brand-violet p-1">
            <Image
              src="/abul-hasan.webp"
              alt="Abul Hasan"
              width={320}
              height={320}
              className="size-full rounded-full bg-background object-cover object-top"
            />
          </div>
          <h3 className="relative mt-5 text-2xl font-bold">Abul Hasan</h3>
          <p className="relative text-muted-foreground">Frontend Developer</p>
          <p className="relative mt-4 inline-flex items-center gap-2 rounded-full bg-green-500/15 px-4 py-1.5 text-sm font-medium text-green-600 dark:text-green-400">
            <span className="size-2 rounded-full bg-green-500" />
            Open to opportunities
          </p>
          <ul className="relative mt-6 flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <li key={skill} className="glass rounded-full px-3 py-1.5 text-sm font-medium">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Bio + what I do */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-lg leading-8 text-muted-foreground">
            <p>
              Hi, I&apos;m <strong className="text-foreground">Abul Hasan</strong>, a frontend developer who builds
              clean, fast and accessible web applications.
            </p>
            <p>
              I care about the details: responsive layouts, smooth interactions and code that is easy to maintain, so
              your product feels great to use and stays easy to grow.
            </p>
            <p>Looking for a developer for your team or your next project? I&apos;d love to hear from you.</p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <li key={service.title} className="glass rounded-3xl p-5 transition-transform hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-brand-blue to-brand-violet text-white shadow-lg shadow-brand-blue/30">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{service.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{service.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
