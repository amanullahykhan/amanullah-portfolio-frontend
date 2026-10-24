import Link from "next/link";
import { getProjects } from "@/lib/wordpress";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const projects = await getProjects();
  const featured = projects.slice(0, 3);

  return (
    <main className="min-h-screen px-6">
      <section className="flex items-center justify-center py-32">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Amanullah Khan</h1>
          <p className="mt-4 text-zinc-500">
            Full-stack WordPress developer — custom plugins, automation, and API integrations.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-block border border-zinc-700 rounded-md px-5 py-2 text-sm hover:border-zinc-500 transition-colors"
          >
            View Projects
          </Link>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="max-w-5xl mx-auto pb-24">
          <h2 className="text-xl font-semibold tracking-tight mb-6">Featured work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}