"use client";

import { useState } from "react";
import { Search, SearchX } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/projects";

// All projects with a search box and category filter buttons.
export default function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const categories = ["All", ...new Set(projects.flatMap((project) => project.category ?? []))];
  const search = query.trim().toLowerCase();
  const visible = projects.filter(
    (project) =>
      (category === "All" || project.category === category) &&
      [project.title, project.description, ...project.tags].join(" ").toLowerCase().includes(search),
  );

  function reset() {
    setCategory("All");
    setQuery("");
  }

  return (
    <>
      {/* Toolbar */}
      <div className="glass mt-12 flex flex-col gap-4 rounded-3xl p-4 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setCategory(name)}
              aria-pressed={category === name}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-brand-blue ${
                category === name
                  ? "bg-linear-to-r from-brand-blue to-brand-violet text-white shadow-[0_4px_20px] shadow-brand-blue/40"
                  : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-2.5 focus-within:border-brand-blue lg:w-72 lg:shrink-0">
          <Search aria-hidden className="size-4 shrink-0 text-muted-foreground" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title or technology"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-text-muted">
        Showing {visible.length} of {projects.length} projects
      </p>

      {visible.length > 0 ? (
        <ul className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <li key={project.id}>
              <ProjectCard project={project} number={index + 1} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="glass mt-6 flex flex-col items-center rounded-3xl px-6 py-16 text-center">
          <SearchX aria-hidden className="size-12 text-brand-violet" />
          <p className="mt-4 text-xl font-bold">No projects found</p>
          <p className="mt-2 text-muted-foreground">Try a different word or category.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 cursor-pointer rounded-full bg-linear-to-r from-brand-blue to-brand-violet px-6 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
