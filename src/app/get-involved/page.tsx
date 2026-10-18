import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Banknote, HandHeart, Handshake } from "lucide-react";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Get involved — Food of Life Foundation",
};

const ways = [
  {
    id: "donate",
    icon: Banknote,
    label: "01",
    title: "Donate Food or Funds",
    body: "Every contribution goes directly toward purchasing grains, cooking oil, food hampers, and essential supplies for widows, children, and vulnerable families in Kuje Area Council, Abuja.",
    image: images.donationBox,
    imageAlt: "Food relief box being prepared for a family in Kuje",
    cta: (
      <Link href="/contact" className="btn-pill">
        Sponsor a food drive
        <ArrowUpRight size={16} />
      </Link>
    ),
  },
  {
    id: "volunteer",
    icon: HandHeart,
    label: "02",
    title: "Volunteer in Kuje",
    body: "Join our field team in Kuje for food sorting, packaging, and community outreach days — or lend your skills in media, logistics, medical checks, and community mobilization.",
    image: images.volunteersLoft,
    imageAlt: "Volunteers preparing donations",
    cta: (
      <Link href="/contact" className="btn-outline">
        Join the volunteer team
        <ArrowUpRight size={16} />
      </Link>
    ),
  },
  {
    id: "partner",
    icon: Handshake,
    label: "03",
    title: "Partner with us",
    body: "Churches, food producers, businesses, and civic organizations in Abuja can co-host a Kuje community feeding outreach or sponsor staple food supplies in bulk.",
    image: images.foodPacks,
    imageAlt: "Community members preparing food packs together",
    cta: (
      <Link href="/contact" className="btn-primary">
        Start a partnership
        <ArrowUpRight size={16} />
      </Link>
    ),
  },
];

export default function GetInvolved() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-clay mb-5">
            Three ways to serve Kuje with us
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            Share food, time, or partnership to lift a household in Kuje.
          </h1>
        </div>
      </section>

      {ways.map((w, i) => {
        const Icon = w.icon;
        const isOdd = i % 2 === 1;
        return (
          <section
            key={w.id}
            id={w.id}
            className={`scroll-mt-24 ${isOdd ? "bg-paper-dim border-y border-line" : ""}`}
          >
            <div className="container-page py-16 md:py-20">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={`${isOdd ? "order-1 lg:order-2" : "order-1"}`}>
                  <div className="img-hover-overlay aspect-[4/3] relative">
                    <Image
                      src={w.image}
                      alt={w.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`${isOdd ? "order-2 lg:order-1" : "order-2"}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display italic text-[13px] text-ink-soft/60 font-medium">
                      {w.label}
                    </span>
                    <div className="w-px h-4 bg-line" aria-hidden="true" />
                    <Icon size={20} className="text-clay" aria-hidden="true" />
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight">
                    {w.title}
                  </h2>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-soft max-w-lg">
                    {w.body}
                  </p>
                  <div className="mt-7">{w.cta}</div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
