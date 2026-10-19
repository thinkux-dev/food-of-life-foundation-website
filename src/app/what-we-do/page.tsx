import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "What we do — Food of Life Foundation",
};

const programs = [
  {
    title: "Community food drives & hunger relief",
    body: "We organize targeted food outreaches across Abuja and Nigeria, delivering bags of grains, cartons of food, cooking oil, and essential provisions directly to families experiencing food insecurity.",
    image: images.foodPacks,
    reverse: false,
  },
  {
    title: "Widows' provisions & livelihood support",
    body: "Widows often carry the full weight of feeding and educating their children alone. We provide regular food parcels alongside livelihood partnerships and trade support to help them sustain their households.",
    image: images.widowMarket,
    reverse: true,
  },
  {
    title: "Orphanage & child nutrition care",
    body: "Hungry children cannot learn. We visit orphanages, schools, and vulnerable neighbourhoods to provide nourishing meals, food packs, and welfare support so children stay healthy and in the classroom.",
    image: images.orphanageGroup,
    reverse: false,
  },
  {
    title: "Food security & agricultural partnerships",
    body: "We collaborate with food security initiatives, farmers, and civic partners across Abuja and Nigeria to strengthen local food systems and reach more households sustainably.",
    image: images.stakeholdersMeeting,
    reverse: true,
  },
];

export default function WhatWeDo() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-clay mb-5">
            How the mission becomes practice
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            Four programs. One shared table across the Nation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Everything we do in Abuja and across Nigeria sits under four
            practical programs designed to meet immediate hunger while
            strengthening families for tomorrow.
          </p>
        </div>
      </section>

      {programs.map((p) => (
        <section key={p.title} className="container-page py-14 md:py-16">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              p.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl text-dusk leading-tight">
                {p.title}
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-ink-soft max-w-lg">
                {p.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-dusk text-paper">
        <div className="container-page py-20 md:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl leading-tight">
              See our outreach in action.
            </h2>
            <p className="mt-3 text-paper/70 text-[16px] leading-relaxed">
              Explore photos and videos from our field outreaches across Abuja, FCT.
            </p>
          </div>
          <Link
            href="/outreach"
            className="inline-flex items-center gap-2 rounded-xl bg-gold text-dusk-deep px-7 py-4 text-[15px] font-semibold hover:bg-gold-soft transition-colors shrink-0"
          >
            View outreach gallery
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
