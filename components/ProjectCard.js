import Link from "next/link";

export default function ProjectCard({ project, index = 0 }) {
  const tags = project.acf?.tags || "";
  const tagList = tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-line p-6 hover:border-ink transition-colors"
    >
      <p className="meta uppercase mb-4">
        § {String(index + 1).padStart(3, "0")}
      </p>
      <h3 className="text-lg font-medium tracking-tight text-ink group-hover:text-ink">
        {project.title.rendered}
      </h3>
      {tagList.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tagList.map((tag) => (
            <span
              key={tag}
              className="meta uppercase border border-line px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="mt-6 meta uppercase text-ink group-hover:translate-x-1 transition-transform inline-block">
        VIEW CASE STUDY →
      </p>
    </Link>
  );
}