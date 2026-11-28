import { cacheLife } from "next/cache";
import SectionLink from "@/components/SectionLink";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Logo from "@/components/Logo";
import { contact, navLinks, socialLinks } from "@/lib/site";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
};

async function getYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getYear();

  return (
    <footer className="relative mt-0 overflow-hidden bg-foreground/[0.06] dark:bg-black/50">
      {/* Glowing gradient line on top */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-violet to-transparent" />
      <div aria-hidden className="absolute -top-24 left-1/4 size-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div aria-hidden className="absolute -right-16 bottom-0 size-80 rounded-full bg-brand-violet/25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <SectionLink href="/#home" aria-label="Abul Hasan, home" className="inline-block">
              <Logo />
            </SectionLink>
            <p className="mt-5 max-w-sm leading-7 text-muted-foreground">
              Full stack web developer crafting modern, fast and scalable web applications, from polished interfaces to
              APIs and databases.
            </p>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="glass flex size-11 items-center justify-center rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_0_24px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-brand-blue"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold tracking-widest text-text-muted uppercase">Quick Links</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <SectionLink href={link.href} className="group inline-flex flex-col font-medium text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                    <span className="h-0.5 w-0 rounded-full bg-linear-to-r from-brand-blue to-brand-violet transition-all duration-300 group-hover:w-full" />
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-text-muted uppercase">Get In Touch</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl text-brand-blue transition-transform group-hover:scale-110">
                    <Mail aria-hidden className="size-4" />
                  </span>
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`} className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl text-brand-blue transition-transform group-hover:scale-110">
                    <Phone aria-hidden className="size-4" />
                  </span>
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Big watermark name */}
        <p
          aria-hidden
          className="mt-16 text-center text-[min(14vw,11rem)] leading-[0.85] font-black tracking-tighter whitespace-nowrap select-none bg-linear-to-b from-brand-blue/40 to-transparent bg-clip-text text-transparent"
        >
          ABUL HASAN
        </p>

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-6 text-sm text-text-muted sm:flex-row">
          <p>&copy; {year} Abul Hasan. All rights reserved.</p>
          <p>Built with Next.js, React &amp; Tailwind CSS</p>
          <SectionLink
            href="#top"
            aria-label="Back to top"
            className="glass group flex size-11 items-center justify-center rounded-full text-foreground transition-all hover:-translate-y-1 hover:shadow-[0_0_24px] hover:shadow-brand-violet/50 focus-visible:outline-2 focus-visible:outline-brand-blue"
          >
            <ArrowUp aria-hidden className="size-5 transition-transform group-hover:-translate-y-0.5" />
          </SectionLink>
        </div>
      </div>
    </footer>
  );
}
