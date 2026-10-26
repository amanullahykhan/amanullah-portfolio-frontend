"use client";

const THEMES = [
  { from: "#2f4cff", to: "#eef1ff", label: "text-white" },
  { from: "#047857", to: "#e6f7f1", label: "text-white" },
  { from: "#b45309", to: "#fff2e5", label: "text-white" },
  { from: "#a21caf", to: "#fbeefc", label: "text-white" },
];

function pickTheme(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return THEMES[Math.abs(hash) % THEMES.length];
}

export default function ProjectThumbnail({ title, slug }) {
  const theme = pickTheme(slug || title);
  const initials = title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-line">
      <div
        className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${theme.from} 0%, ${theme.to} 100%)`,
        }}
      >
        <span
          className={`font-mono-ui text-5xl font-medium tracking-tight opacity-90 ${theme.label}`}
        >
          {initials}
        </span>
      </div>
    </div>
  );
}