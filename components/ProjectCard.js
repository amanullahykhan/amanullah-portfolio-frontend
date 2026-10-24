import Link from "next/link";

export default function ProjectCard({ project }) {
  const tags = project.acf?.tags || "";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition-colors"
    >
      <h3 className="text-lg font-semibold">{project.title.rendered}</h3>
      {tags && <p className="mt-2 text-sm text-zinc-500">{tags}</p>}
    </Link>
  );
}