import Image from "next/image";
import { Code, Download, ArrowRight, Briefcase, Layers, Smile } from "lucide-react";
import SectionLink from "@/components/SectionLink";
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
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center px-4 pt-24 pb-6 sm:px-6 lg:grid-cols-2 lg:content-center lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-12">
        {/* Portrait: a round photo on phones and tablets, the large glass portrait on desktop */}
        <div className="relative mx-auto lg:col-start-2 lg:row-start-1 lg:w-full lg:max-w-lg lg:px-10 lg:pt-10">
          {/* Layered glass panels and glow behind the desktop portrait */}
          <div aria-hidden className="absolute inset-x-4 top-10 bottom-4 hidden rounded-[2.5rem] bg-linear-to-br from-brand-blue/30 to-brand-violet/30 blur-3xl lg:block" />
          <div aria-hidden className="glass absolute inset-x-0 top-12 bottom-0 hidden rounded-[2.5rem] lg:block" />
          <div aria-hidden className="glass absolute inset-x-8 top-4 bottom-12 hidden -rotate-3 rounded-[2.5rem] opacity-70 lg:block" />

          {/* Glow and gradient ring around the round photo */}
          <div aria-hidden className="absolute -inset-3 rounded-full bg-linear-to-br from-brand-blue to-brand-violet opacity-50 blur-2xl lg:hidden" />
          <div className="relative size-44 rounded-full bg-linear-to-br from-brand-blue to-brand-violet p-1 sm:size-52 lg:size-auto lg:rounded-none lg:bg-none lg:p-0">
            <Image
              src="/abul-hasan.webp"
              alt="Portrait of Abul Hasan"
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 512px, 208px"
              priority
              className="size-full rounded-full bg-background object-cover object-top lg:h-auto lg:rounded-none lg:bg-transparent lg:[mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
            />
          </div>

          {/* Small badge under the round photo */}
          <p className="glass absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold whitespace-nowrap lg:hidden">
            <span aria-hidden className="size-2 rounded-full bg-green-500" />
            Open to opportunities
          </p>

          {/* Floating glass card */}
          <div className="glass animate-float absolute top-6 -right-6 hidden rounded-2xl p-4 lg:block">
            <Code className="size-8 text-brand-blue" />
            <p className="mt-2 font-semibold">Clean Code</p>
            <p className="text-sm text-muted-foreground">Better Tomorrow</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mt-8 text-center lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:text-left">
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-medium lg:py-2 lg:text-lg">
            <span aria-hidden>👋</span> Hello, I&apos;m
          </p>

          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:mt-6 xl:text-8xl">
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

          <h2 className="mt-5 text-2xl font-semibold sm:text-4xl lg:mt-6 xl:text-5xl">
            Full Stack Developer
            <span aria-hidden className="ml-1 inline-block h-[0.9em] w-0.5 translate-y-1 bg-brand-violet animate-blink" />
          </h2>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0 lg:mt-6">
            I craft modern, fast and scalable web applications with a focus on great user experience.
          </p>

          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4 lg:mt-8 lg:justify-start">
            <SectionLink
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-7 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              View My Projects
              <ArrowRight className="size-5" />
            </SectionLink>
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

          <ul className="mt-5 flex justify-center gap-3 lg:mt-8 lg:justify-start">
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

        {/* Statistics */}
        <ul className="glass relative mx-auto mt-8 grid w-full max-w-md grid-cols-3 divide-x divide-foreground/10 rounded-3xl py-4 lg:col-start-2 lg:row-start-2 lg:-mt-14 lg:max-w-[26rem] lg:gap-2 lg:divide-x-0 lg:p-5">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <li key={stat.label} className="flex flex-col items-center gap-1 px-1 text-center lg:flex-row lg:gap-3 lg:text-left">
                <Icon aria-hidden className="size-5 shrink-0 text-brand-blue lg:size-6" />
                <div>
                  <p className="text-xl font-bold sm:text-2xl">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <TechMarquee />
    </section>
  );
}
