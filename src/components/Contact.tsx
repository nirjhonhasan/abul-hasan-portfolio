import { ArrowUpRight, Mail, Phone } from "lucide-react";
import CopyEmailButton from "@/components/CopyEmailButton";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { contact } from "@/lib/site";

const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent("Let's work together")}`;

const contactCards = [
  { label: "Email", value: contact.email, href: mailtoHref, Icon: Mail },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone}`, Icon: Phone },
  { label: "LinkedIn", value: "in/mhabulhasan", href: contact.linkedin, Icon: LinkedinIcon, external: true },
  { label: "GitHub", value: "nirjhonhasan", href: contact.github, Icon: GithubIcon, external: true },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-foreground/10 bg-brand-blue/10 dark:bg-black/30"
    >
      <div aria-hidden className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand-violet/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's work"
          highlight="together"
          align="center"
          description="Hiring or have a project in mind? Send me a message and I'll get back to you."
        />

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-7 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <Mail className="size-5" />
            Email me
          </a>
          <CopyEmailButton email={contact.email} />
        </div>

        <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          {contactCards.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-[0_0_28px] hover:shadow-brand-blue/30 focus-visible:outline-2 focus-visible:outline-brand-blue"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-muted-foreground">{label}</span>
                  <span className="block truncate font-semibold">{value}</span>
                </span>
                <ArrowUpRight aria-hidden className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand-blue" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
