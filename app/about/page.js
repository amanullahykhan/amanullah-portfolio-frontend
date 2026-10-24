export const metadata = {
  title: "About",
  description: "Short bio, skills, and background for Amanullah Khan.",
};
export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-6 text-zinc-400 leading-relaxed">
        I'm Amanullah Khan, a full-stack WordPress developer working in the IT
        department of a humanitarian NGO, where I build and maintain
        production websites, custom plugins, and automation workflows used
        by real teams every day.
      </p>
      <p className="mt-4 text-zinc-400 leading-relaxed">
        My work centers on WordPress and PHP, with growing experience in
        automation tooling (n8n), REST APIs, and — through projects like this
        site — React, Next.js, Node.js, and Python.
      </p>
    </main>
  );
}