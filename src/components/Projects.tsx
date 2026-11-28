import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { getProjects } from "@/lib/projects";

export default async function Projects() {
  const { projects, isDummy } = await getProjects();

  return (
    <section id="projects" className="scroll-mt-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          label="Featured Projects"
          watermark="Projects"
          title="Some of my"
          highlight="recent work"
          align="center"
          description="A selection of projects I have built, from idea to polished, working product."
        />

        {isDummy && (
          <p className="mt-6 text-center text-sm text-text-muted">
            Showing sample projects. Real projects will appear here once they are uploaded to the server.
          </p>
        )}

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project, index) => (
            <li key={project.id}>
              <ProjectCard project={project} number={index + 1} />
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-7 py-3.5 font-semibold text-white transition-shadow hover:shadow-[0_0_32px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            View all projects
            <ArrowRight aria-hidden className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
