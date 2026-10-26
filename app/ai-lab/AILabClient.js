"use client";
import { useState } from "react";

export default function AILabClient() {
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
    <main className="max-w-2xl mx-auto px-6 py-24">
      <p className="meta uppercase mb-4">§ 06 — AI LAB</p>
      <h1 className="text-4xl font-medium tracking-tight text-ink">
        Readability analyzer
      </h1>
      <p className="mt-3 text-sub">
        A self-hosted Python/FastAPI service scoring text readability —
        paste a paragraph for a Flesch reading-ease score and grade level.
      </p>

      <form onSubmit={handleAnalyze} className="mt-10 space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          rows={8}
          placeholder="Paste text to analyze..."
          className="w-full bg-transparent border border-line px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="meta uppercase border border-ink text-ink px-6 py-2.5 hover:bg-ink hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "ANALYZING..." : "ANALYZE →"}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-6 meta uppercase text-orange">
          SOMETHING WENT WRONG — IS THE SERVICE REACHABLE?
        </p>
      )}

      {result && (
        <div className="mt-10 border-t border-line pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[
            { label: "WORD COUNT", value: result.word_count },
            { label: "SENTENCE COUNT", value: result.sentence_count },
            { label: "READING EASE", value: result.flesch_reading_ease.toFixed(1) },
            { label: "GRADE LEVEL", value: result.flesch_kincaid_grade.toFixed(1) },
            { label: "DIFFICULT WORDS", value: result.difficult_words },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-medium text-ink">{stat.value}</div>
              <div className="mt-1 meta uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}