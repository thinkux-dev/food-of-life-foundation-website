import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Utensils, HeartHandshake, Sprout, Camera, Film } from "lucide-react";
import GlobalBand from "@/components/GlobalBand";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import FadeIn from "@/components/FadeIn";
import { images } from "@/data/images";
import { upcomingCampaigns } from "@/data/campaigns";
import { outreachMedia } from "@/data/outreachMedia";

const focusAreas = [
  {
    icon: Utensils,
    title: "Food & Hunger Relief",
    body: "Direct distribution of staple food packs, cartons, and cooking essentials to vulnerable households across Kuje communities so no family goes to bed hungry.",
    image: images.motherBabyCarton,
  },
  {
    icon: HeartHandshake,
    title: "Mothers & Widows Care",
    body: "Food provisions, personal visits, and livelihood partnerships that help widows and mothers in Kuje stand strong with dignity.",
    image: images.widowMarket,
  },
  {
    icon: Sprout,
    title: "Children & Orphanage Support",
    body: "Nourishing meals, care, and outreach visits for orphans and school children in Kuje Area Council so every child can grow and learn in health.",
    image: images.orphanageGroup,
  },
];

export default function Home() {
  const featuredVideos = outreachMedia.filter((m) => m.type === "video").slice(0, 2);
  const featuredPhotos = outreachMedia.filter((m) => m.type === "image").slice(0, 3);

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="container-page pt-14 md:pt-20 pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Text block */}
          <FadeIn variant="up" delay={80}>
            <p className="font-display italic text-lg text-clay mb-5">
              Reaching the needy with food across the Nation — starting in Kuje, Abuja
            </p>

            <AnimatedHeadline />

            <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-lg">
              Food of Life Foundation exists to fight hunger and restore hope —
              walking alongside vulnerable families, widows, and children in
              Kuje Area Council, Abuja with practical food relief, welfare, and
              steady community care.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/get-involved#donate" className="btn-pill">
                Support an outreach
              </Link>
              <Link href="/outreach" className="btn-outline">
                Watch Kuje outreach videos &amp; photos
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>

          {/* Hero image */}
          <FadeIn variant="scale" delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[24px] border border-gold/40 -z-10 hidden sm:block" />
              <div className="img-hover-overlay aspect-[4/5] sm:aspect-[5/6]">
                <Image
                  src={images.heroChildren}
                  alt="Food of Life Foundation volunteers handing food packs to children in Kuje, Abuja"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <FadeIn variant="up" delay={480}>
                <div className="card absolute -bottom-7 left-4 right-10 sm:right-auto sm:w-72 px-5 py-4">
                  <p className="font-display italic text-[15px] text-dusk leading-snug">
                    &ldquo;Reaching the needy with food across the Nation.&rdquo;
                  </p>
                  <p className="mt-1 text-[13px] text-ink-soft">
                    On the ground in Kuje, Abuja.
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <GlobalBand />

      {/* ── Mission ────────────────────────────────────────────── */}
      <section className="container-page py-20 md:py-28">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center">
          <FadeIn variant="left" className="order-2 lg:order-1">
            <div className="img-hover-overlay aspect-[4/3]">
              <Image
                src={images.orphanageGroup}
                alt="Food of Life Foundation team with children during an outreach in Kuje, Abuja"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn variant="up" delay={120} className="order-1 lg:order-2">
            <div className="rule mb-6 max-w-[220px]" />
            <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight">
              Meeting hunger and hardship right where families live in Kuje.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
              Across Kuje Area Council in Abuja, rising food costs and economic
              pressure leave many mothers, orphans, and vulnerable households
              uncertain of their next meal.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">
              Food of Life Foundation goes directly into Kuje streets, schools,
              and care homes — bringing food packs, cartons of nourishment, and
              genuine human connection with dignity and consistency.
            </p>
            <Link href="/about" className="btn-ghost mt-7">
              Read our full story
              <ArrowUpRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Focus areas ────────────────────────────────────────── */}
      <section className="bg-paper-dim border-y border-line">
        <div className="container-page py-20 md:py-28">
          <FadeIn variant="up">
            <div className="max-w-2xl">
              <div className="rule mb-6 max-w-[220px]" />
              <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight">
                Three pillars. One table of hope for Kuje.
              </h2>
            </div>
          </FadeIn>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {focusAreas.map((f, i) => (
              <FadeIn key={f.title} variant="up" delay={i * 130}>
                <div className="card h-full flex flex-col">
                  <div className="img-card aspect-[5/4] relative">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <f.icon size={22} className="text-clay mb-3" aria-hidden="true" />
                    <h3 className="font-display text-2xl text-dusk">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft flex-1">
                      {f.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kuje Outreach Videos & Photos Showcase ─────────────── */}
      <section className="container-page py-20 md:py-28">
        <FadeIn variant="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="rule mb-6 max-w-[220px]" />
              <p className="font-display italic text-clay mb-2 flex items-center gap-2">
                <Camera size={17} /> Field moments from Kuje, Abuja
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight">
                Videos &amp; pictures from our outreach on the ground.
              </h2>
            </div>
            <Link href="/outreach" className="btn-ghost shrink-0">
              View all 4 videos &amp; 10+ photos
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeIn>

        {/* Featured Videos Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {featuredVideos.map((v, i) => (
            <FadeIn key={v.id} variant="up" delay={i * 120}>
              <div className="card h-full flex flex-col">
                <div className="relative aspect-video bg-dusk-deep">
                  <video
                    src={v.src}
                    poster={v.poster}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dusk/90 text-white text-[11px] font-semibold tracking-wide uppercase pointer-events-none">
                    <Film size={12} /> Outreach Video
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-clay">
                    {v.location}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl text-dusk">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-ink-soft leading-relaxed">
                    {v.caption}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Featured Photos Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhotos.map((item, i) => (
            <FadeIn key={item.id} variant="up" delay={i * 120}>
              <div className="card h-full flex flex-col">
                <div className="img-card aspect-[4/3] relative bg-dusk-deep">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] font-bold tracking-widest uppercase text-clay">
                    {item.location}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg text-dusk">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] text-ink-soft leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Campaigns preview ──────────────────────────────────── */}
      <section className="bg-paper-dim border-y border-line">
        <div className="container-page py-20 md:py-28">
          <FadeIn variant="up">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-xl">
                <div className="rule mb-6 max-w-[220px]" />
                <h2 className="font-display text-3xl md:text-4xl text-dusk leading-tight">
                  Upcoming outreaches in Kuje.
                </h2>
              </div>
              <Link href="/campaigns" className="btn-ghost shrink-0">
                View every campaign
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingCampaigns.slice(0, 3).map((c, i) => (
              <FadeIn key={c.slug} variant="up" delay={i * 130}>
                <Link
                  href={`/campaigns#${c.slug}`}
                  className="card group flex flex-col h-full"
                >
                  <div className="img-card aspect-[16/10] relative">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-[12px] font-semibold tracking-widest uppercase text-clay">{c.period}</p>
                    <h3 className="mt-2 font-display text-xl text-dusk group-hover:text-clay transition-colors leading-snug">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft flex-1">
                      {c.summary}
                    </p>
                    <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
                      <span className="text-[13px] text-ink-soft">{c.focus}</span>
                      <ArrowUpRight size={16} className="text-clay group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote band ─────────────────────────────────────────── */}
      <section className="bg-dusk text-paper">
        <div className="container-page py-20 md:py-24">
          <FadeIn variant="up">
            <p className="font-display italic text-2xl md:text-3xl leading-snug max-w-3xl text-paper/95">
              &ldquo;When you place food in a mother&rsquo;s or child&rsquo;s
              hands in Kuje, you do more than answer hunger for a day — you
              remind an entire home that they are seen, valued, and not
              forgotten.&rdquo;
            </p>
            <p className="mt-6 text-gold-soft text-[15px] font-medium">
              Food of Life Foundation — Kuje Outreach Team
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="container-page py-20 md:py-24">
        <FadeIn variant="scale">
          <div className="card-muted px-8 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-dusk leading-tight">
                Help us put food on the next family&rsquo;s table in Kuje.
              </h2>
              <p className="mt-3 text-[16px] text-ink-soft leading-relaxed">
                Every food carton, bag of grain, volunteer hour, or partnership
                directly supports vulnerable households in Kuje Area Council, Abuja.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/get-involved#donate" className="btn-pill">
                Give now
              </Link>
              <Link href="/get-involved" className="btn-outline">
                Get involved
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
