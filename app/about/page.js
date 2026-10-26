export const metadata = {
  title: "About",
  description: "Background, skills, and approach — Amanullah Khan, WordPress developer and digital growth strategist.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="meta uppercase mb-4">§ 04 — ABOUT</p>
      <h1 className="text-4xl font-medium tracking-tight text-ink">
        Background
      </h1>

      <div className="mt-10 space-y-6 text-sub leading-relaxed">
        <p>
          I'm a full-stack WordPress developer with 9+ years of experience,
          currently leading digital strategy and web development at
          Alkhidmat Foundation Ghotki — a humanitarian organization — where
          I build and maintain production websites, custom plugins, and
          automation workflows used by real teams every day.
        </p>
        <p>
          My core work is WordPress and PHP: custom plugins built from
          scratch rather than bolted-on page-builder stacks, REST API
          integrations, and workflow automation with n8n. This site is also
          proof of a newer direction — React, Next.js, Node.js, and Python —
          built as a working example rather than a resume bullet.
        </p>
        <p>
          I hold a BS in Computer Engineering from Sir Syed University of
          Engineering &amp; Technology.
        </p>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <p className="meta uppercase mb-4">§ 04.01 — STACK</p>
        <div className="flex flex-wrap gap-2">
          {[
            "WORDPRESS",
            "PHP",
            "REST APIs",
            "N8N",
            "REACT",
            "NEXT.JS",
            "NODE.JS",
            "PYTHON",
          ].map((tech) => (
            <span
              key={tech}
              className="meta uppercase border border-line px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}