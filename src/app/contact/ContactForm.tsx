"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border border-line bg-paper-dim px-6 py-8 rounded-xl">
        <p className="font-display text-xl text-dusk">Message received.</p>
        <p className="mt-2 text-[15px] text-ink-soft">
          Thank you for reaching out — someone from the Food of Life Foundation
          team will reply soon.
        </p>
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
            required
            type="text"
            className="w-full border border-line bg-paper px-4 py-3 text-[15px] rounded-lg outline-none focus:border-dusk transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[14px] text-ink-soft mb-1.5">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
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
          required
          rows={5}
          className="w-full border border-line bg-paper px-4 py-3 text-[15px] rounded-lg outline-none focus:border-dusk transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="btn-primary"
      >
        Send message
      </button>
    </form>
  );
}
