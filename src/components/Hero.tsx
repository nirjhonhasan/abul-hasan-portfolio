import Image from "next/image";
import { Code, Download, ArrowRight, Briefcase, Layers, Smile } from "lucide-react";
import TechMarquee from "@/components/TechMarquee";
import { GithubIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/components/icons";
import { socialLinks, stats } from "@/lib/site";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  YouTube: YoutubeIcon,
  X: XIcon,
};

const statIcons = [Briefcase, Layers, Smile];

export default function Hero() {
  return (
    <section id="home" className="flex flex-col lg:min-h-screen">
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-4 pt-32 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
      {/* Left: introduction */}
      <div>
        <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-medium">
          <span aria-hidden>👋</span> Hello, I&apos;m
        </p>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-8xl">
          Abul{" "}
          <span className="relative inline-block bg-linear-to-r from-brand-blue to-brand-violet bg-clip-text text-transparent">
            Hasan
            <svg
              aria-hidden
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              className="absolute -bottom-3 left-0 h-3 w-full"
            >
              <path
                d="M2 9 C 60 1, 140 1, 198 6"
                fill="none"
                stroke="url(#underline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline-gradient">
                  <stop offset="0%" stopColor="var(--brand-blue)" />
                  <stop offset="100%" stopColor="var(--brand-violet)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <h2 className="mt-6 text-3xl font-semibold sm:text-4xl xl:text-5xl">
          Full Stack Developer
          <span aria-hidden className="ml-1 inline-block h-[0.9em] w-0.5 translate-y-1 bg-brand-violet animate-blink" />
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
          I craft modern, fast and scalable web applications with a focus on great user experience.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-7 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            View My Projects
            <ArrowRight className="size-5" />
          </a>
          {/* Needs a real file at public/cv.pdf */}
          <a
            href="/Abul-Hasan-CV.pdf"
            download="Abul-Hasan-CV.pdf"
            className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-shadow hover:shadow-[0_0_28px] hover:shadow-brand-violet/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <Download className="size-5 text-brand-blue" />
            Download My CV
          </a>
        </div>

        <ul className="mt-8 flex gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.label as keyof typeof socialIcons];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="glass flex size-12 items-center justify-center rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px] hover:shadow-brand-blue/40 focus-visible:outline-2 focus-visible:outline-brand-blue"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: portrait, floating card and stats */}
      <div className="relative p-10 mx-auto w-full max-w-[19rem] sm:max-w-md lg:max-w-lg">
        {/* Layered glass panels and glow behind the portrait */}
        <div aria-hidden className="absolute inset-x-4 top-10 bottom-16 rounded-[2.5rem] bg-linear-to-br from-brand-blue/30 to-brand-violet/30 blur-3xl" />
        <div aria-hidden className="glass absolute inset-x-0 top-12 bottom-12 rounded-[2.5rem]" />
        <div aria-hidden className="glass absolute inset-x-8 top-4 bottom-24 -rotate-3 rounded-[2.5rem] opacity-70" />

        <Image
          src="/abul-hasan.webp"
          alt="Portrait of Abul Hasan"
          width={1254}
          height={1254}
          sizes="(min-width: 1024px) 512px, (min-width: 448px) 448px, 100vw"
          priority
          className="relative w-full [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
        />

        {/* Floating glass card */}
        <div className="glass animate-float absolute top-6 hidden sm:block -right-1 rounded-2xl p-3 sm:-right-6 sm:p-4">
          <Code className="size-8 text-brand-blue" />
          <p className="mt-2 font-semibold">Clean Code</p>
          <p className="text-sm text-muted-foreground">Better Tomorrow</p>
        </div>

        {/* Statistics */}
        <ul className="glass relative -mt-14 grid grid-cols-3 gap-2 rounded-3xl p-4 sm:p-5">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <li key={stat.label} className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-3 sm:text-left">
                <Icon aria-hidden className="size-6 shrink-0 text-brand-blue" />
                <div>
                  <p className="text-xl font-bold sm:text-2xl">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      <TechMarquee />
    </section>
  );
}
