import { getProjects } from "@/lib/wordpress";
import ProjectCard from "@/components/ProjectCard";
export const instant = false;

export const metadata = {
  title: "Projects",
  description: "Case studies in WordPress development, automation, and API integrations.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <p className="meta uppercase mb-4">§ 02 — PROJECTS</p>
      <h1 className="text-4xl font-medium tracking-tight text-ink">Selected work</h1>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </main>
  );
}