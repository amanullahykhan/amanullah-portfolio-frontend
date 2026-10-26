"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

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
    <main className="max-w-xl mx-auto px-6 py-24">
      <Reveal>
        <div>
          <p className="meta uppercase mb-4 text-accent">§ 05 — CONTACT</p>
          <h1 className="text-4xl font-medium tracking-tight text-ink">
            Get in touch
          </h1>
          <p className="mt-3 text-sub">
            WordPress development, automation, or API integration work — send a
            message and I'll get back to you.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label htmlFor="name" className="meta uppercase block mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full bg-transparent border border-line px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="meta uppercase block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border border-line px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="meta uppercase block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-transparent border border-line px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="meta uppercase border border-ink text-ink px-6 py-2.5 hover:bg-accent hover:border-accent hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "SENDING..." : "SEND →"}
          </button>

          {status === "sent" && (
            <p className="meta uppercase text-green">MESSAGE SENT</p>
          )}
          {status === "error" && (
            <p className="meta uppercase text-orange">
              SOMETHING WENT WRONG — TRY AGAIN
            </p>
          )}
        </form>
      </Reveal>
    </main>
  );
}