import { getProjects } from "@/lib/wordpress";
import { notFound } from "next/navigation";

// Optional: Generate static paths at build time for better performance
export async function generateStaticParams() {
  const projects = await getProjects();
  if (!Array.isArray(projects)) return [];
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

async function getProjectBySlug(slug) {
  const projects = await getProjects();
  
  // Safeguard against undefined/null responses from WordPress during build
  if (!Array.isArray(projects)) {
    return null;
  }

  return projects.find((p) => p.slug === slug) || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const acf = project.acf || {};

  return {
    title: project.title?.rendered || "Case Study",
    description: acf.problem
      ? acf.problem.slice(0, 160)
      : `Case study: ${project.title?.rendered || slug}`,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const acf = project.acf || {};
  const tags = (acf.tags || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const sections = [
    { label: "PROBLEM", value: acf.problem },
    { label: "ROLE", value: acf.role },
    { label: "CONSTRAINTS", value: acf.constraints },
    { label: "ARCHITECTURE", value: acf.architecture_notes },
    { label: "RESULT", value: acf.result },
    { label: "LESSONS", value: acf.lessons },
  ].filter((s) => s.value);

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="meta uppercase mb-4">§ 02.01 — CASE STUDY</p>
      <h1 className="text-4xl font-medium tracking-tight text-ink">
        {project.title?.rendered}
      </h1>

      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="meta uppercase border border-line px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {project.content?.rendered && (
        <div
          className="prose mt-10"
          dangerouslySetInnerHTML={{ __html: project.content.rendered }}
        />
      )}

      <div className="mt-12 divide-y divide-line border-t border-line">
        {sections.map((section) => (
          <section key={section.label} className="py-8">
            <p className="meta uppercase mb-3">{section.label}</p>
            <p className="text-sub leading-relaxed">{section.value}</p>
          </section>
        ))}
      </div>

      {acf.repo_url && (
        <a
          href={acf.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block meta uppercase text-ink border-b border-ink hover:opacity-70 transition-opacity"
        >
          VIEW REPO →
        </a>
      )}
    </main>
  );
}