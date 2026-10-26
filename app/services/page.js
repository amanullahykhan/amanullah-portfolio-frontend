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

export const metadata = {
  title: "Services",
  description: "WordPress plugin development, automation, API integrations, and performance/SEO work.",
};

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <p className="meta uppercase mb-4">§ 03 — SERVICES</p>
      <h1 className="text-4xl font-medium tracking-tight text-ink">
        What I build
      </h1>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="border border-line p-6 hover:border-ink transition-colors"
          >
            <p className="meta uppercase mb-4">
              § {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="text-lg font-medium tracking-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-3 text-sub leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}