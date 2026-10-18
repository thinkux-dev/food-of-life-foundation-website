import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { upcomingCampaigns, completedCampaigns } from "@/data/campaigns";

export const metadata: Metadata = {
  title: "Campaigns — Food of Life Foundation",
};

const focusBadge: Record<string, string> = {
  "Food Relief": "bg-clay/10 text-clay",
  Widows:        "bg-moss/10 text-moss",
  Children:      "bg-dusk/10 text-dusk",
  Community:     "bg-gold/10 text-gold",
};

export default function Campaigns() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-clay mb-5">
            Our work in Kuje, Abuja
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            Outreaches completed, and what we&rsquo;re preparing next.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Here is every food drive and welfare campaign we have carried out in
            Kuje Area Council, alongside the upcoming outreaches we are raising
            support for right now.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="container-page pb-20 md:pb-28">
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-dusk">
            Upcoming campaigns
          </h2>
          <span className="text-[13px] text-ink-soft font-medium">
            {upcomingCampaigns.length} planned
          </span>
        </div>

        <div className="space-y-8">
          {upcomingCampaigns.map((c) => (
            <div key={c.slug} id={c.slug} className="card overflow-visible">
              <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                <div className="img-card relative aspect-[16/11] md:aspect-auto md:min-h-[260px] rounded-b-none md:rounded-r-none md:rounded-l-[20px]">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 35vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-7 md:p-8 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${focusBadge[c.focus]}`}>
                        {c.focus}
                      </span>
                      <span className="text-[13px] text-ink-soft font-medium">{c.period}</span>
                      <span className="text-ink-soft/40">·</span>
                      <span className="text-[13px] text-ink-soft">{c.location}</span>
                    </div>

                    <h3 className="font-display text-2xl md:text-[1.65rem] text-dusk leading-snug mb-3">
                      {c.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-ink-soft">
                      {c.summary}
                    </p>

                    {c.goal && (
                      <div className="mt-4 flex items-start gap-3 bg-gold/8 border border-gold/25 rounded-xl px-4 py-3">
                        <span className="text-gold mt-0.5 shrink-0">◎</span>
                        <p className="text-[13.5px] text-ink-soft leading-relaxed">
                          <span className="font-semibold text-dusk">Goal — </span>
                          {c.goal}
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <Link href="/get-involved#donate" className="btn-pill">
                      Support this campaign
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed */}
      <section className="bg-paper-dim border-y border-line">
        <div className="container-page py-20 md:py-24">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="font-display text-2xl md:text-3xl text-dusk">
              Completed outreaches
            </h2>
            <span className="text-[13px] text-ink-soft font-medium">
              {completedCampaigns.length} so far
            </span>
          </div>

          <div className="space-y-8">
            {completedCampaigns.map((c) => (
              <div key={c.slug} id={c.slug} className="card-muted">
                <div className="grid md:grid-cols-[2fr_3fr] gap-0">
                  <div className="img-card relative aspect-[16/11] md:aspect-auto md:min-h-[240px] rounded-b-none md:rounded-r-none md:rounded-l-[20px]">
                    <Image
                      src={c.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 35vw, 90vw"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-moss text-white text-[11px] font-bold tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                        Completed
                      </span>
                    </div>
                  </div>

                  <div className="p-7 md:p-8 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${focusBadge[c.focus]}`}>
                          {c.focus}
                        </span>
                        <span className="text-[13px] text-ink-soft font-medium">{c.period}</span>
                        <span className="text-ink-soft/40">·</span>
                        <span className="text-[13px] text-ink-soft">{c.location}</span>
                      </div>

                      <h3 className="font-display text-2xl md:text-[1.65rem] text-dusk leading-snug mb-3">
                        {c.title}
                      </h3>
                      <p className="text-[15px] leading-relaxed text-ink-soft">
                        {c.summary}
                      </p>

                      {c.outcome && (
                        <div className="mt-4 flex items-start gap-3 bg-moss/8 border border-moss/25 rounded-xl px-4 py-3">
                          <span className="text-moss mt-0.5 shrink-0">✓</span>
                          <p className="text-[13.5px] text-ink-soft leading-relaxed">
                            <span className="font-semibold text-dusk">Outcome — </span>
                            {c.outcome}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
