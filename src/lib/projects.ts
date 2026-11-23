import { cacheLife } from "next/cache";

export type Project = {
  id: string;
  title: string;
  category?: string; // for example "Web App"
  description: string;
  tags: string[];
  image?: string; // full image URL (served by your server)
  liveUrl?: string;
  githubUrl?: string;
};

// What your server may send. MongoDB documents use `_id`.
type ApiProject = Partial<Omit<Project, "id">> & { _id?: string; id?: string };

const sampleTags = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

// Shown until real projects are uploaded to the server.
export const dummyProjects: Project[] = [
  { id: "d1", category: "Portfolio", title: "Portfolio Website", description: "A sample project card. Replace it by uploading a real project to your server.", tags: sampleTags.slice(0, 3) },
  { id: "d2", category: "Dashboard", title: "E-Commerce Dashboard", description: "A sample project card with a short description of what the project does and why it matters.", tags: ["React", "TypeScript", "Charts"] },
  { id: "d3", category: "Web App", title: "Task Manager App", description: "A sample project card. Real titles, images, tags and links will come from your server.", tags: ["Next.js", "MongoDB", "Tailwind CSS"] },
  { id: "d4", category: "Mobile App", title: "Weather Forecast App", description: "A sample project card showing how a project will look once it is uploaded.", tags: ["React", "REST API"] },
  { id: "d5", category: "Blog", title: "Blog Platform", description: "A sample project card. Add a live demo and GitHub link to make the buttons appear.", tags: ["Next.js", "Express", "MongoDB"] },
  { id: "d6", category: "Web App", title: "Chat Application", description: "A sample project card with tags, a description and optional links.", tags: ["React", "Node.js", "WebSocket"] },
  { id: "d7", category: "Landing Page", title: "Landing Page Kit", description: "Extra sample project. Only the first 6 projects are shown in this section.", tags: sampleTags.slice(1) },
  { id: "d8", category: "Web App", title: "Recipe Finder", description: "Extra sample project. Only the first 6 projects are shown in this section.", tags: ["React", "REST API"] },
];

function toProject(item: ApiProject, index: number): Project | null {
  if (!item.title) return null;
  return {
    id: item._id ?? item.id ?? String(index),
    title: item.title,
    category: item.category,
    description: item.description ?? "",
    tags: item.tags ?? [],
    image: item.image,
    liveUrl: item.liveUrl,
    githubUrl: item.githubUrl,
  };
}

// imgbb "viewer" links (https://ibb.co.com/abc123) are web pages, not images, and the id in
// that link is only a tiny 180px thumbnail. The page's og:image tag holds the full-size original.
async function resolveImage(url?: string): Promise<string | undefined> {
  if (!url || !/^https:\/\/(?:ibb\.co|ibb\.co\.com)\/[A-Za-z0-9]+\/?$/.test(url)) return url;
  try {
    const html = await (await fetch(url)).text();
    const original = html.match(/<meta property="og:image" content="([^"]+)"/);
    return original ? original[1] : url;
  } catch {
    return url;
  }
}

// Loads projects from your server (GET {API_URL}/projects, returning an array).
// Falls back to the dummy projects when API_URL is not set, the server is down, or it has no projects yet.
export async function getProjects(): Promise<{ projects: Project[]; isDummy: boolean }> {
  "use cache";
  cacheLife("minutes");

  // Remove trailing slashes so "https://host/" does not become "https://host//projects".
  const apiUrl = process.env.API_URL?.replace(/\/+$/, "");
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/projects`);
      if (response.ok) {
        const data: unknown = await response.json();
        if (Array.isArray(data)) {
          const projects = (data as ApiProject[])
            .map(toProject)
            .filter((project): project is Project => project !== null);
          await Promise.all(
            projects.map(async (project) => {
              project.image = await resolveImage(project.image);
            }),
          );
          if (projects.length > 0) return { projects, isDummy: false };
        }
      }
    } catch {
      // Server unreachable: use the dummy projects below.
    }
  }

  return { projects: dummyProjects, isDummy: true };
}
