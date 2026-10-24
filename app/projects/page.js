import { getProjects } from "@/lib/wordpress";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Case studies in WordPress development, automation, and API integrations.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}