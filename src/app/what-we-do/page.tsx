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
    body: "We organize targeted food outreaches in Kuje Area Council, delivering bags of rice, garri, beans, cooking oil, and essential provisions directly to families experiencing food insecurity.",
    image: images.foodPacks,
    reverse: false,
  },
  {
    title: "Widows' provisions & livelihood support",
    body: "Widows in Kuje often carry the full weight of feeding and educating their children alone. We provide regular food parcels alongside small grants and trade support to help them sustain their households.",
    image: images.widowMarket,
    reverse: true,
  },
  {
    title: "Child nutrition & back-to-school care",
    body: "Hungry children cannot learn. We pair nutritional outreach with basic school supplies and welfare checks so vulnerable children across Kuje stay healthy and in the classroom.",
    image: images.villageChildren,
    reverse: false,
  },
  {
    title: "Emergency household welfare",
    body: "Through our local community network in Kuje, we respond to families facing sudden crisis, illness, or hardship with immediate food and household relief.",
    image: images.volunteersSorting,
    reverse: true,
  },
];

export default function WhatWeDo() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-clay mb-5">
            How the mission becomes practice in Kuje
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            Four programs. One shared table.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Everything we do in Kuje, Abuja sits under four practical programs
            designed to meet immediate hunger while strengthening families for
            tomorrow.
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
                alt=""
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
              See our Kuje outreach in action.
            </h2>
            <p className="mt-3 text-paper/70 text-[16px] leading-relaxed">
              Explore photos and videos from our field outreaches in Kuje Area Council.
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
