
const services = [
  {
    title: "Custom WordPress Plugins",
    description:
      "Purpose-built plugins instead of bloated page-builder stacks — forms, integrations, custom post types, admin tools.",
  },
  {
    title: "Automation (n8n)",
    description:
      "Workflow automation connecting WordPress, Google Sheets, email, and internal systems — request intake, task tracking, reminders.",
  },
  {
    title: "API Integrations",
    description:
      "REST API work connecting WordPress to external services, spreadsheets, and custom backends.",
  },
  {
    title: "Performance & SEO",
    description:
      "Technical SEO, page speed, and accessibility fixes — the kind of groundwork that actually moves rankings.",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="border border-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}