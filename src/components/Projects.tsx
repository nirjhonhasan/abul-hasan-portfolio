import Image from "next/image";
import { Code, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
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
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue/50 hover:shadow-[0_24px_60px_-12px] hover:shadow-brand-blue/40">
                {/* Soft color wash that fades in on hover */}
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-blue/15 to-brand-violet/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  {project.image ? (
                    <>
                      {/* Blurred copy of the image fills the empty space around it */}
                      <Image
                        src={project.image}
                        alt=""
                        aria-hidden
                        fill
                        sizes="64px"
                        className="scale-125 object-cover opacity-70 blur-2xl"
                      />
                      {/* The full image, never cropped, at its original quality */}
                      <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                        quality={85}
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </>
                  ) : (
                    <div className="flex size-full items-center justify-center bg-linear-to-br from-brand-blue/40 to-brand-violet/40 transition-transform duration-700 group-hover:scale-110">
                      <Code aria-hidden className="size-14 text-white/80" />
                    </div>
                  )}
                  {/* Shine sweep on hover */}
                  <div aria-hidden className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  {project.category && (
                    <span className="absolute top-4 right-4 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      {project.category}
                    </span>
                  )}
                  <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-brand-blue">{project.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 leading-7 text-muted-foreground">{project.description}</p>

                  {project.tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue dark:text-[#9b8aff]">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-5 flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-4 py-2 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px] hover:shadow-brand-blue/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                        >
                          <ExternalLink aria-hidden className="size-4" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                        >
                          <GithubIcon className="size-4" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
