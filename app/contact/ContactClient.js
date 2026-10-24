"use client";
import { useState } from "react";

export default function ContactClient() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "sent" : "error");
    if (res.ok) form.reset();
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">Name</label>
          <input
            id="name"
            name="name"
            required
            className="w-full bg-transparent border border-zinc-700 rounded-md px-4 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-zinc-400 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-transparent border border-zinc-700 rounded-md px-4 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-zinc-400 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-transparent border border-zinc-700 rounded-md px-4 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="border border-zinc-700 rounded-md px-5 py-2 text-sm hover:border-zinc-500 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "sent" && <p className="text-sm text-green-500">Message sent.</p>}
        {status === "error" && <p className="text-sm text-red-500">Something went wrong.</p>}
      </form>
    </main>
  );
}