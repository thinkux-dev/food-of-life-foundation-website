"use client";

import { useState } from "react";

const RECIPIENT_EMAIL = "connectwithfoodoflife@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("Donating food or funds");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const mailtoHref = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    `[Food of Life Foundation] ${reason} — from ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nTopic: ${reason}\n\n${message}`
  )}`;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `[Food of Life Foundation] ${reason} — from ${name}`,
          topic: reason,
          message,
        }),
      });

      if (!res.ok) {
        window.location.href = mailtoHref;
      }
    } catch {
      window.location.href = mailtoHref;
    } finally {
      setSubmitting(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="border border-line bg-paper-dim px-6 py-8 rounded-xl">
        <p className="font-display text-xl text-dusk">Message sent.</p>
        <p className="mt-2 text-[15px] text-ink-soft">
          Thank you for reaching out — your message has been routed to{" "}
          <span className="font-medium text-dusk">{RECIPIENT_EMAIL}</span> and
          someone from the Food of Life Foundation team will reply soon.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={mailtoHref} className="btn-outline text-[14px] py-2 px-4">
            Also open in email app
          </a>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setName("");
              setEmail("");
              setMessage("");
            }}
            className="text-[14px] font-medium text-clay hover:underline px-2"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-[14px] text-ink-soft mb-1.5">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-line bg-paper px-4 py-3 text-[15px] rounded-lg outline-none focus:border-dusk transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[14px] text-ink-soft mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-line bg-paper px-4 py-3 text-[15px] rounded-lg outline-none focus:border-dusk transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="reason" className="block text-[14px] text-ink-soft mb-1.5">
          I&rsquo;m reaching out about
        </label>
        <select
          id="reason"
          name="topic"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full border border-line bg-paper px-4 py-3 text-[15px] rounded-lg outline-none focus:border-dusk transition-colors"
        >
          <option>Donating food or funds</option>
          <option>Volunteering with the Foundation</option>
          <option>Partnering with the Foundation</option>
          <option>Referring a family or community for support</option>
          <option>Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-[14px] text-ink-soft mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-line bg-paper px-4 py-3 text-[15px] rounded-lg outline-none focus:border-dusk transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
