import Link from "next/link";
import { getProjects } from "@/lib/wordpress";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import CountUp from "@/components/CountUp";

export const instant = false;
export default async function Home() {
  const projects = await getProjects();
  const featured = projects.slice(0, 3);

  return (
    <main className="px-6">
      {/* Hero */}
      <Reveal>
        <section className="max-w-5xl mx-auto pt-20 pb-16">
          <p className="meta uppercase mb-4 text-accent">§ 00 — DEVELOPER SPECIFICATION</p>
          <AnimatedHeadline
            text="Full-stack WordPress developer, building since 2017"
            className="text-4xl sm:text-5xl font-medium tracking-tight text-ink max-w-2xl leading-tight"
          />
          <p className="mt-5 text-base text-sub max-w-xl leading-relaxed">
            Custom plugins, automation workflows, and API integrations —
            headless CMS architecture, self-hosted AI tooling, and production
            systems that run without babysitting.
          </p>
          <div className="mt-8 flex gap-4 font-mono-ui text-xs">
            <Link
              href="/projects"
              className="border border-ink text-ink px-5 py-2.5 tracking-wide hover:bg-accent hover:border-accent hover:text-white transition-colors"
            >
              [ VIEW WORK → ]
            </Link>
            <Link
              href="/contact"
              className="border border-line text-sub px-5 py-2.5 tracking-wide hover:border-ink hover:text-ink transition-colors"
            >
              [ GET IN TOUCH ]
            </Link>
          </div>
        </section>
      </Reveal>

      {/* Stat block */}
      <Reveal delay={0.1}>
        <section className="max-w-5xl mx-auto py-10 border-y border-line">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono-ui">
            {[
              { value: "9+", label: "YEARS EXPERIENCE", color: "text-accent" },
              { value: `${projects.length || 3}+`, label: "PROJECTS SHIPPED", color: "text-green" },
              { value: "4", label: "CORE TECHNOLOGIES", color: "text-orange" },
              { value: "1", label: "SELF-HOSTED STACK", color: "text-magenta" },
            ].map((stat) => (
              <div key={stat.label}>
                <CountUp value={stat.value} className={`text-3xl font-medium ${stat.color}`} />
                <div className="mt-1 text-xs tracking-wide text-sub">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Featured work */}
      {featured.length > 0 && (
        <Reveal delay={0.15}>
          <section className="max-w-5xl mx-auto py-16">
            <p className="meta uppercase mb-2 text-accent">§ 01 — FEATURED WORK</p>
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-medium tracking-tight text-ink">
                /work
              </h2>
              <Link
                href="/projects"
                className="meta uppercase text-sub hover:text-accent transition-colors"
              >
                SHOW ALL →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {featured.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </section>
        </Reveal>
      )}
    </main>
  );
}