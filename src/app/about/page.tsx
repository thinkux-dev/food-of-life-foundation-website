import Image from "next/image";
import type { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About — Food of Life Foundation",
};

const values = [
  {
    title: "Food first, dignity always",
    body: "We believe no person can thrive on an empty stomach. Every food pack and outreach in Kuje is delivered with warmth, respect, and honour.",
  },
  {
    title: "Present on the ground in Kuje",
    body: "We don't operate from a distance. We walk the streets and villages of Kuje Area Council, listening to community elders, widows, and families directly.",
  },
  {
    title: "Accountable & transparent",
    body: "We measure our work by real meals shared, real households reached, and documented outreaches that donors and partners can see clearly.",
  },
];

export default function About() {
  return (
    <>
      <section className="container-page pt-14 md:pt-20 pb-16">
        <div className="max-w-2xl">
          <p className="font-display italic text-lg text-clay mb-5">About us</p>
          <h1 className="font-display text-4xl md:text-5xl text-dusk leading-tight">
            Nourishing Kuje communities with compassion and consistency.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            Food of Life Foundation is a humanitarian initiative dedicated to
            combating hunger, supporting widows, and caring for vulnerable
            children and families across Kuje Area Council, Abuja.
          </p>
        </div>
      </section>

      <section className="relative w-full aspect-[16/8] md:aspect-[16/6]">
        <Image
          src={images.communityGroup}
          alt="Community outreach in Kuje, Abuja"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14">
          <div>
            <div className="rule mb-6 max-w-[220px]" />
            <h2 className="font-display text-3xl text-dusk leading-tight">
              Our mission
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              To eradicate hunger and restore hope among vulnerable families,
              widows, and children in Kuje, Abuja through direct food relief,
              nutritional care, and sustainable community support.
            </p>
          </div>
          <div>
            <div className="rule mb-6 max-w-[220px]" />
            <h2 className="font-display text-3xl text-dusk leading-tight">
              Our vision
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              A thriving Kuje community — and a wider Nigeria — where no child,
              widow, or vulnerable household goes to bed hungry or forgotten.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-dim border-y border-line">
        <div className="container-page py-20 md:py-24">
          <div className="rule mb-6 max-w-[220px]" />
          <h2 className="font-display text-3xl text-dusk leading-tight max-w-xl">
            What guides how we serve
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-dusk/20 pt-5">
                <p className="font-display text-3xl text-gold mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl text-dusk">{v.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={images.foodPacks}
              alt="Volunteers preparing food relief packages for Kuje families"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="rule mb-6 max-w-[220px]" />
            <h2 className="font-display text-3xl text-dusk leading-tight">
              Why Kuje, Abuja?
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-soft">
              Kuje Area Council is home to vibrant rural and peri-urban
              communities just outside Abuja&rsquo;s city centre, yet many
              households face acute food insecurity and limited access to safety
              nets. By focusing deeply on Kuje, our outreach team builds lasting
              relationships with local families and ensures every food drive
              reaches those who need it most.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
