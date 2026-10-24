export const metadata = {
  title: "About",
  description: "Full-stack WordPress developer building production websites, automation, and API integrations for a humanitarian NGO — now expanding into React, Next.js, and Python.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>

      <p className="mt-6 text-zinc-400 leading-relaxed">
        I&apos;m Amanullah Khan, a full-stack WordPress developer working in the IT
        department of Alkhidmat Foundation Ghotki, a humanitarian NGO in Sindh,
        Pakistan. I build and maintain production websites, custom plugins, and
        automation workflows that real teams — program staff, a hospital, a
        foundation&apos;s public-facing site — depend on every day.
      </p>

      <p className="mt-4 text-zinc-400 leading-relaxed">
        My foundation is WordPress and PHP: custom post types, ACF, REST API
        integrations, and plugins built to solve a specific problem rather than
        bolted on from a marketplace. Custom Minimalist Mailer (CMM4), a job
        application mailer that routes submissions and resumes straight into a
        spreadsheet and shared drive, is a good example of that approach.
      </p>

      <p className="mt-4 text-zinc-400 leading-relaxed">
        From there I&apos;ve grown into automation — n8n pipelines handling
        request intake, task tracking, and escalation reminders — and into
        self-hosting: NinaVoiceBot, a fully local voice chatbot running
        Whisper, Ollama, and Piper on my own infrastructure, with no
        per-request API costs and no conversation data leaving the server.
      </p>

      <p className="mt-4 text-zinc-400 leading-relaxed">
        This site is the next step: headless WordPress feeding a Next.js
        frontend, a Node.js API route, and a small Python/FastAPI service —
        the same &quot;connect clean APIs together&quot; instinct behind
        everything above, applied to a modern JavaScript stack I&apos;m
        actively building real, working experience in.
      </p>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
          What I work with
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "WordPress",
            "PHP",
            "REST APIs",
            "n8n",
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "FastAPI",
            "SEO",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-zinc-800 rounded-md px-3 py-1 text-sm text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-10 text-zinc-400 leading-relaxed">
        Have a project that needs a WordPress build, an automation pipeline,
        or an API integration?{" "}
        <a
          href="/contact"
          className="text-zinc-200 underline underline-offset-4 hover:text-white"
        >
          Let&apos;s talk
        </a>
        .
      </p>
    </main>
  );
}