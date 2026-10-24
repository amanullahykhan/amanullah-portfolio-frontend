import { getProjects } from "@/lib/wordpress";
import { notFound } from "next/navigation";

async function getProjectBySlug(slug) {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const acf = project.acf || {};

  return {
    title: project.title.rendered,
    description: acf.problem
      ? acf.problem.slice(0, 160)
      : `Case study: ${project.title.rendered}`,
  };
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const acf = project.acf || {};

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        {project.title.rendered}
      </h1>

      {acf.tags && (
        <p className="mt-2 text-sm text-zinc-500">{acf.tags}</p>
      )}

      <div
        className="mt-6 text-zinc-300"
        dangerouslySetInnerHTML={{ __html: project.content.rendered }}
      />

      {acf.problem && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-zinc-400">{acf.problem}</p>
        </section>
      )}

      {acf.role && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Role</h2>
          <p className="mt-2 text-zinc-400">{acf.role}</p>
        </section>
      )}
      {acf.constraints && (
        <section className="mt-6">
            <h2 className="text-xl font-semibold">Constraints</h2>
            <p className="mt-2 text-zinc-400">{acf.constraints}</p>
        </section>
        )}

        {acf.architecture_notes && (
        <section className="mt-6">
            <h2 className="text-xl font-semibold">Architecture</h2>
            <p className="mt-2 text-zinc-400">{acf.architecture_notes}</p>
        </section>
        )}

        {acf.result && (
        <section className="mt-6">
            <h2 className="text-xl font-semibold">Result</h2>
            <p className="mt-2 text-zinc-400">{acf.result}</p>
        </section>
        )}

        {acf.lessons && (
        <section className="mt-6">
            <h2 className="text-xl font-semibold">Lessons</h2>
            <p className="mt-2 text-zinc-400">{acf.lessons}</p>
        </section>
        )}

      {acf.repo_url && (
        <a
          href={acf.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-zinc-300 underline"
        >
          View repo →
        </a>
      )}
    </main>
  );
}