"use client";
import { useState } from "react";

export default function AILabPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle");

  async function handleAnalyze(e) {
    e.preventDefault();
    setStatus("loading");
    setResult(null);

    try {
      const res = await fetch("http://168.110.208.201:8002/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setResult(data);
      setStatus("done");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">AI Lab</h1>
      <p className="mt-4 text-zinc-500">
        A small Python/FastAPI service that scores text readability — paste
        a paragraph and get a Flesch reading-ease score and grade level.
      </p>

      <form onSubmit={handleAnalyze} className="mt-8 space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={8}
          placeholder="Paste text to analyze..."
          className="w-full bg-transparent border border-zinc-700 rounded-md px-4 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-zinc-700 rounded-md px-5 py-2 text-sm hover:border-zinc-500 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Analyzing..." : "Analyze"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-500">Something went wrong — is the service reachable?</p>
      )}

      {result && (
        <div className="mt-8 border border-zinc-800 rounded-lg p-6 space-y-2 text-sm">
          <p>Word count: <span className="text-zinc-400">{result.word_count}</span></p>
          <p>Sentence count: <span className="text-zinc-400">{result.sentence_count}</span></p>
          <p>Flesch reading ease: <span className="text-zinc-400">{result.flesch_reading_ease.toFixed(1)}</span></p>
          <p>Flesch-Kincaid grade level: <span className="text-zinc-400">{result.flesch_kincaid_grade.toFixed(1)}</span></p>
          <p>Difficult words: <span className="text-zinc-400">{result.difficult_words}</span></p>
        </div>
      )}
    </main>
  );
}