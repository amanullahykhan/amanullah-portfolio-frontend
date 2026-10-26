import Link from "next/link";
import ProjectThumbnail from "./ProjectThumbnail";

const TAG_COLORS = [
  { text: "text-accent", bg: "bg-blue-soft", border: "border-accent" },
  { text: "text-green", bg: "bg-green-soft", border: "border-green" },
  { text: "text-orange", bg: "bg-orange-soft", border: "border-orange" },
  { text: "text-magenta", bg: "bg-magenta-soft", border: "border-magenta" },
];

export default function ProjectCard({ project, index = 0 }) {
  const tags = project.acf?.tags || "";
  const tagList = tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-line hover:border-ink hover:shadow-lg transition-all duration-200"
    >
      <ProjectThumbnail title={project.title.rendered} slug={project.slug} />

      <div className="p-6">
        <p className="meta uppercase mb-4 text-accent">
          § {String(index + 1).padStart(3, "0")}
        </p>
        <h3 className="text-lg font-medium tracking-tight text-ink">
          {project.title.rendered}
        </h3>
        {tagList.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tagList.map((tag, i) => {
              const color = TAG_COLORS[i % TAG_COLORS.length];
              return (
                <span
                  key={tag}
                  className={`meta uppercase border px-2 py-1 ${color.text} ${color.bg} ${color.border}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        )}
        <p className="mt-6 meta uppercase text-ink group-hover:text-accent group-hover:translate-x-1 transition-all inline-block">
          VIEW CASE STUDY →
        </p>
      </div>
    </Link>
  );
}