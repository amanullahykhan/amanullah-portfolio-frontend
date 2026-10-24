import AILabClient from "./AILabClient";

export const metadata = {
  title: "AI Lab",
  description: "A live Python/FastAPI readability analyzer — paste text and get a Flesch reading-ease score.",
};

export default function AILabPage() {
  return <AILabClient />;
}