import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import SectionHeading from "@/components/SectionHeading";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Abul Hasan",
  description: "All the web applications built by Abul Hasan, a full stack web developer.",
};

export default async function ProjectsPage() {
  const { projects, isDummy } = await getProjects();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 pt-32 pb-20 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="glass group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-brand-blue"
      >
        <ArrowLeft aria-hidden className="size-4 transition-transform group-hover:-translate-x-1" />
        Back to home
      </Link>

      <div className="mt-12">
        <SectionHeading
          label="Portfolio"
          watermark="Projects"
          title="All my"
          highlight="projects"
          align="center"
          description="Everything I have built, from polished interfaces to the APIs and databases behind them."
        />
      </div>

      {isDummy && (
        <p className="mt-6 text-center text-sm text-text-muted">
          Showing sample projects. The project server could not be reached.
        </p>
      )}

      <ProjectGallery projects={projects} />

      {/* Call to action */}
      <section className="glass mt-20 rounded-3xl px-6 py-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Have a project in mind?</h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">Let&apos;s build something great together.</p>
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-7 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <Mail aria-hidden className="size-5" />
          Contact me
        </Link>
      </section>
    </main>
  );
}
